from pawpal_system import Owner, Pet, Task, Scheduler

def main():
    owner = Owner(name="Jordan")
    biscuit = Pet(name="Biscuit", species="Dog")
    mochi = Pet(name="Mochi", species="Cat")
    owner.add_pet(biscuit)
    owner.add_pet(mochi)

    # Add tasks using the NEW required start_time argument
    biscuit.add_task(Task(name="Evening Feed", duration_minutes=10, priority=1, start_time="18:00", frequency="Daily"))
    mochi.add_task(Task(name="Morning Cuddles", duration_minutes=15, priority=2, start_time="07:30"))
    biscuit.add_task(Task(name="Morning Walk", duration_minutes=30, priority=1, start_time="08:00"))
    
    # Intentionally cause a conflict at 08:00
    mochi.add_task(Task(name="Vet Appointment", duration_minutes=45, priority=1, start_time="08:00"))

    brain = Scheduler(owner=owner)

    print("\n--- 1. Testing Conflict Detection ---")
    conflicts = brain.detect_conflicts()
    for warning in conflicts:
        print(warning)

    print("\n--- 2. Testing Sorting (Chronological) ---")
    sorted_tasks = brain.sort_by_time()
    for item in sorted_tasks:
        t = item["task"]
        print(f"[{t.start_time}] {t.name} for {item['pet_name']}")

    print("\n--- 3. Testing Recurring Tasks (Completing 'Evening Feed') ---")
    feed_task_id = biscuit.tasks[0].id
    biscuit.complete_task(feed_task_id)
    
    biscuit_tasks = brain.filter_tasks(pet_name="Biscuit")
    for item in biscuit_tasks:
        t = item["task"]
        status = "Done" if t.is_completed else "Pending"
        print(f"- {t.name} on {t.task_date} | Status: {status}")

if __name__ == "__main__":
    main()