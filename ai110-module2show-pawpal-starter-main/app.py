import streamlit as st
from pawpal_system import Owner, Pet, Task, Scheduler

st.set_page_config(page_title="PawPal+", page_icon="🐾", layout="centered")

st.title("🐾 PawPal+")

if "owner" not in st.session_state:
    st.session_state.owner = Owner(name="My User")

owner = st.session_state.owner 

st.divider()
st.subheader("1. Add a Pet")
st.write(f"Current pets for {owner.name}: {len(owner.pets)}")

col_p, col_s, col_b = st.columns([2, 2, 1])
with col_p:
    pet_name = st.text_input("Pet name")
with col_s:
    species = st.selectbox("Species", ["Dog", "Cat", "Other"])
with col_b:
    st.write("") 
    st.write("") 
    if st.button("Add Pet", use_container_width=True):
        if pet_name:
            new_pet = Pet(name=pet_name, species=species)
            owner.add_pet(new_pet)
            st.success(f"{pet_name} added!")
        else:
            st.error("Name required.")

if owner.pets:
    for p in owner.pets:
        st.caption(f"- **{p.name}** ({p.species}) - {len(p.tasks)} tasks")

st.divider()
st.subheader("2. Add a Care Task")

if not owner.pets:
    st.info("👆 Please add a pet above before assigning tasks.")
else:
    pet_names = [p.name for p in owner.pets]
    selected_pet_name = st.selectbox("Assign task to which pet?", pet_names)
    
    # We added the start_time input here!
    col1, col2, col3 = st.columns(3)
    with col1:
        task_title = st.text_input("Task title", value="Morning walk")
    with col2:
        start_time = st.time_input("Start Time")
    with col3:
        duration = st.number_input("Duration (minutes)", min_value=1, max_value=240, value=20)
        
    # We added the frequency input here!
    col4, col5 = st.columns(2)
    with col4:
        priority_text = st.selectbox("Priority", ["High", "Medium", "Low"])
    with col5:
        frequency_text = st.selectbox("Frequency", ["Once", "Daily", "Weekly"])

    priority_map = {"High": 1, "Medium": 2, "Low": 3}

    if st.button("Add Task"):
        selected_pet = next(p for p in owner.pets if p.name == selected_pet_name)
        # We now pass start_time and frequency when creating the Task!
        new_task = Task(
            name=task_title, 
            duration_minutes=int(duration), 
            priority=priority_map[priority_text],
            start_time=start_time.strftime("%H:%M"),
            frequency=frequency_text
        )
        selected_pet.add_task(new_task)
        st.success(f"Task added to {selected_pet.name}'s list!")

st.divider()
st.subheader("3. Smart Schedule")

if st.button("Generate schedule"):
    all_tasks = owner.get_all_tasks()
    
    if not all_tasks:
        st.warning("Please add at least one task to a pet first!")
    else:
        brain = Scheduler(owner=owner)
        
        # Check conflicts
        conflicts = brain.detect_conflicts()
        if conflicts:
            for c in conflicts:
                st.warning(c)
                
        # Sort and display
        sorted_tasks = brain.sort_by_time()
        st.success("### Your Sorted Daily Plan")
        
        for index, item in enumerate(sorted_tasks, start=1):
            task = item["task"]
            st.markdown(f"**{index}. [{task.start_time}] {task.name}** for {item['pet_name']} — {task.duration_minutes} mins")