from pawpal_system import Pet, Task

def test_task_completion():
    """Verify that calling mark_complete() changes the task's status."""
    # Setup - added start_time
    my_task = Task(name="Give Meds", duration_minutes=5, priority=1, start_time="09:00")
    
    # Verify initial state
    assert my_task.is_completed is False
    
    # Action
    my_task.mark_complete()
    
    # Verify new state
    assert my_task.is_completed is True

def test_task_addition():
    """Verify that adding a task to a Pet increases that pet's task count."""
    # Setup
    my_pet = Pet(name="Biscuit", species="Dog")
    # Added start_time
    my_task = Task(name="Morning Walk", duration_minutes=30, priority=1, start_time="08:00")
    
    # Verify initial state
    assert len(my_pet.tasks) == 0
    
    # Action
    my_pet.add_task(my_task)
    
    # Verify new state
    assert len(my_pet.tasks) == 1
    assert my_pet.tasks[0].name == "Morning Walk"