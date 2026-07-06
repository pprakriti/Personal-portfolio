# PawPal+ Project Reflection

## 1. System Design

**a. Initial design**

- Briefly describe your initial UML design.
- What classes did you include, and what responsibilities did you assign to each?
My initial UML design was centered around three primary classes to keep the data structured and separate from the UI logic:

Pet: Responsible for storing basic demographic information about the pet (e.g., `name`, `species`). This acted as a simple data container.
Task:  Responsible for holding the details of a specific care activity, including its `name`, `duration_minutes`, and `priority` level (e.g., 1 for High, 3 for Low). 
SchedulePlanner: This is the core engine of the app. Its responsibility is to aggregate a `Pet` object and a list of `Task` objects. It includes methods to add tasks (`add_task`) and execute a sorting/filtering algorithm (`generate_plan`) to output a daily schedule that fits within a specified maximum time limit.




**b. Design changes**

- Did your design change during implementation?
- If yes, describe at least one change and why you made it.
Yes, the design changed slightly during implementation, specifically when thinking ahead to integrating the backend logic with the Streamlit frontend. 

The Change: I added a unique identifier (`id` using Python's `uuid` library) and an `is_completed` boolean flag to the `Task` class. 

Why I made it: In the initial thought process, a task was just a theoretical concept with a name and a duration. However, when considering the UI, I realized that if a user wanted to edit, delete, or check off a specific task from their list, the app needed a way to uniquely identify it (especially if there were two tasks with the same name, like "Short Walk"). Additionally, the `is_completed` flag was necessary for tracking state in the UI so the user could see their progress throughout the day.

---

## 2. Scheduling Logic and Tradeoffs

**a. Constraints and priorities**

- What constraints does your scheduler consider (for example: time, priority, preferences)?
- How did you decide which constraints mattered most?
The scheduler primarily considers total available time (in minutes) and the priority level of each task (1 for High, 3 for Low). It also considers absolute start times (HH:MM) to detect scheduling conflicts.
Priority was chosen as the most critical constraint. In a real-world scenario, essential tasks like administering medication or feeding (Priority 1) cannot be skipped simply because a less important task (like grooming) happens to have a shorter duration. The greedy algorithm sorts by priority first, then by duration, ensuring critical needs are met within the time limit.

**b. Tradeoffs**

- Describe one tradeoff your scheduler makes.
- Why is that tradeoff reasonable for this scenario?
For the 'detect_conflicts()' algorithm, I utilized a hash map (dictionary) approach that checks for exact string matches on the 'start_time' and 'task_date'. 
 This approach operates with O(N) time complexity, making it highly performant and easy to read. While the tradeoff is that it ignores overlapping durations (e.g., a 60-minute task at 08:00 and a new task at 08:30 won't flag as a conflict), this is reasonable for a lightweight personal app. Pet care schedules are generally flexible, and strict, interval-based collision detection would over-engineer the solution.

---

---

## 3. AI Collaboration

**a. How you used AI**

- How did you use AI tools during this project (for example: design brainstorming, debugging, refactoring)?
- What kinds of prompts or questions were most helpful?
I utilized AI primarily for scaffolding the Python dataclasses, translating my initial UML diagram into working stubs, and brainstorming methods for handling recurring date logic using Python's 'datetime.timedelta'. The AI was also helpful for navigating Streamlit's 'st.session_state'` to ensure my backend logic persisted in the browser.
 Asking the AI to "suggest a lightweight conflict detection strategy" was particularly useful because it provided options that avoided unnecessarily complex libraries.

**b. Judgment and verification**

- Describe one moment where you did not accept an AI suggestion as-is.
- How did you evaluate or verify what the AI suggested?
At one point, I rejected an AI suggestion to implement a complex interval-tree algorithm for checking time overlaps. 
I evaluated the suggestion by considering the scope of the project. I verified that a simple dictionary key-matching system would satisfy the core requirement of finding simultaneous bookings without adding unnecessary complexity to the codebase. 

---

---

## 4. Testing and Verification

**a. What you tested**

- What behaviors did you test?
- Why were these tests important?
I wrote automated tests using pytest to verify task state changes (e.g., 'mark_complete()' correctly toggling the boolean) and data structure updates (e.g., 'add_task()' successfully appending to a pet's list).
 Applying quality assurance principles early by isolating the backend logic from the UI ensures that the "brain" of the application functions correctly on its own. Testing these core state mutations prevents downstream bugs when the logic is eventually hooked up to Streamlit buttons.

**b. Confidence**

- How confident are you that your scheduler works correctly?
- What edge cases would you test next if you had more time?
I am highly confident in the core "happy path" of the scheduler and the integrity of the data models.
If I had more time, I would test edge cases such as: handling invalid time string inputs, passing a task whose individual duration exceeds the total daily available time, and verifying how recurring daily tasks handle the transition across midnight or leap years.

---

## 5. Reflection

**a. What went well**

- What part of this project are you most satisfied with?
I am most satisfied with successfully bridging the stateless nature of Streamlit with the stateful backend logic. Getting the UI to interact directly with the Python classes without losing data on page refresh felt like a significant structural win.

**b. What you would improve**

- If you had another iteration, what would you improve or redesign?
In another iteration, I would redesign the scheduling algorithm to move beyond a greedy approach. Implementing a dynamic programming solution (similar to the Knapsack problem) would allow the system to truly maximize the usage of the user's available time block rather than just picking the first available high-priority tasks.

**c. Key takeaway**

- What is one important thing you learned about designing systems or working with AI on this project?
A major takeaway is that working alongside AI accelerates the initial scaffolding and syntax formulation immensely. This shifted my focus away from typing boilerplate code and toward higher-level system architecture, edge-case analysis, and algorithm optimization—skills that are critical for rigorous software engineering roles.
