import uuid
from dataclasses import dataclass, field
from typing import List, Optional
from datetime import date, timedelta

@dataclass
class Task:
    """Represents a single care activity with dates and absolute times."""
    name: str
    duration_minutes: int
    priority: int
    start_time: str  # Format: "HH:MM"
    task_date: date = field(default_factory=date.today)
    frequency: str = "Once"  # Options: "Once", "Daily", "Weekly"
    is_completed: bool = False
    id: uuid.UUID = field(default_factory=uuid.uuid4)

    def mark_complete(self) -> Optional['Task']:
        """Marks task complete. Automatically returns a new instance if recurring."""
        self.is_completed = True
        
        # Calculate the next occurrence using timedelta
        if self.frequency == "Daily":
            next_date = self.task_date + timedelta(days=1)
            return Task(self.name, self.duration_minutes, self.priority, self.start_time, next_date, self.frequency)
        elif self.frequency == "Weekly":
            next_date = self.task_date + timedelta(days=7)
            return Task(self.name, self.duration_minutes, self.priority, self.start_time, next_date, self.frequency)
        return None

@dataclass
class Pet:
    """Stores pet details and their specific care tasks."""
    name: str
    species: str
    tasks: List[Task] = field(default_factory=list)

    def add_task(self, task: Task) -> None:
        """Adds a new task to the pet's list."""
        self.tasks.append(task)
        
    def complete_task(self, task_id: uuid.UUID) -> None:
        """Finds a task, marks it complete, and adds recurring tasks if applicable."""
        for task in self.tasks:
            if task.id == task_id:
                next_task = task.mark_complete()
                if next_task:
                    self.add_task(next_task)
                break

@dataclass
class Owner:
    """Manages multiple pets for a single owner."""
    name: str
    pets: List[Pet] = field(default_factory=list)

    def add_pet(self, pet: Pet) -> None:
        """Assigns a new pet to the owner."""
        self.pets.append(pet)

    def get_all_tasks(self) -> List[dict]:
        """Retrieves all tasks across all pets."""
        all_tasks = []
        for pet in self.pets:
            for task in pet.tasks:
                all_tasks.append({"pet_name": pet.name, "task": task})
        return all_tasks

@dataclass
class Scheduler:
    """The brain that organizes, filters, and detects conflicts for tasks."""
    owner: Owner

    def sort_by_time(self) -> List[dict]:
        """Sorts tasks chronologically by date and HH:MM start time."""
        all_tasks = self.owner.get_all_tasks()
        # Using a lambda as a key to sort by date, then alphabetically by HH:MM string
        return sorted(all_tasks, key=lambda x: (x["task"].task_date, x["task"].start_time))

    def filter_tasks(self, pet_name: Optional[str] = None, is_completed: Optional[bool] = None) -> List[dict]:
        """Filters tasks based on the given pet name or completion status."""
        filtered = self.owner.get_all_tasks()
        if pet_name is not None:
            filtered = [item for item in filtered if item["pet_name"] == pet_name]
        if is_completed is not None:
            filtered = [item for item in filtered if item["task"].is_completed == is_completed]
        return filtered

    def detect_conflicts(self) -> List[str]:
        """A lightweight detection that warns if tasks have the exact same start time."""
        all_tasks = self.owner.get_all_tasks()
        time_slots = {}
        warnings = []
        
        for item in all_tasks:
            t = item["task"]
            if not t.is_completed:
                key = (t.task_date, t.start_time)
                if key in time_slots:
                    warnings.append(
                        f"⚠️ CONFLICT: '{t.name}' ({item['pet_name']}) and '{time_slots[key].name}' "
                        f"are both scheduled for {t.start_time} on {t.task_date}."
                    )
                else:
                    time_slots[key] = t
        return warnings