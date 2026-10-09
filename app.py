print("=================================")
print("          SKILLPATH AI")
print("=================================")

print("\nLet's create your learning profile!\n")

name = input("What is your name? ")

print("\nWhich activities do you enjoy?")
print("1. Building models and AI systems")
print("2. Working with data and finding patterns")
print("3. Building websites and software")

choice = input("Choose 1, 2, or 3: ")

career_options = {
    "1": "ml engineer",
    "2": "data analyst",
    "3": "python developer"
}

career = career_options.get(choice, "")

skills = input("What skills do you already know? ")
hours = input("How many hours can you learn per day? ")


# =================================
# SKILL REQUIREMENTS
# =================================

career_skills = {
    "ml engineer": ["python", "numpy", "pandas", "machine learning", "sql"],
    "data analyst": ["python", "sql", "excel", "pandas", "statistics"],
    "python developer": ["python", "git", "sql", "flask", "apis"]
}


# =================================
# FIND SKILL GAP
# =================================

student_skills = skills.lower().replace(",", " ").split()
career_key = career.lower().strip()


if career_key not in career_skills:

    print("\n=================================")
    print("          CAREER NOT FOUND")
    print("=================================")

    print("\nCurrently supported careers:")
    print("• ML Engineer")
    print("• Data Analyst")
    print("• Python Developer")

else:

    required_skills = career_skills[career_key]

    missing_skills = []

    for skill in required_skills:

        if skill not in student_skills:
            missing_skills.append(skill)


    # =================================
    # PROFILE
    # =================================

    print("\n=================================")
    print("          YOUR PROFILE")
    print("=================================")

    print("Name:", name)
    print("Target Job:", career)
    print("Current Skills:", skills)
    print("Daily Learning Time:", hours, "hours")


    # =================================
    # SKILL GAP
    # =================================

    print("\n=================================")
    print("          SKILL GAP")
    print("=================================")

    print("\nSkills you already have:")

    for skill in student_skills:
        print("✓", skill)

    print("\nSkills you need to learn:")

    for skill in missing_skills:
        print("→", skill)


    if missing_skills:

        # =================================
        # 7-DAY ROADMAP
        # =================================

        print("\n=================================")
        print("       YOUR 7-DAY ROADMAP")
        print("=================================")

        days = [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
            "Day 7"
        ]

        for i, day in enumerate(days):

            skill = missing_skills[i % len(missing_skills)]

            print("\n" + day)
            print("Focus:", skill)
            print("Study Time:", hours, "hours")
            print("Task: Learn the basics and complete a small practice exercise.")


        # =================================
        # CURRENT SKILL
        # =================================

        practice_skill = missing_skills[0]


        # =================================
        # PRACTICE CHALLENGE
        # =================================

        print("\n=================================")
        print("       PRACTICE CHALLENGE")
        print("=================================")

        print("\nYour first practice skill:", practice_skill)


        if practice_skill == "numpy":

            print("\nChallenge:")
            print("Create a NumPy array containing 5 numbers.")
            print("Then calculate the average of those numbers.")

        elif practice_skill == "pandas":

            print("\nChallenge:")
            print("Create a Pandas DataFrame containing 3 students")
            print("and their marks.")

        elif practice_skill == "machine learning":

            print("\nChallenge:")
            print("Explain in your own words what Machine Learning is.")
            print("Give one real-world example.")

        elif practice_skill == "sql":

            print("\nChallenge:")
            print("Create a SQL query that selects students")
            print("whose marks are greater than 80.")

        elif practice_skill == "statistics":

            print("\nChallenge:")
            print("Find the mean of these numbers:")
            print("10, 20, 30, 40, 50")

        else:

            print("\nChallenge:")
            print("Explain the basic concept of", practice_skill)


        # =================================
        # GET ANSWER
        # =================================

        print("\n---------------------------------")

        answer = input("Enter your answer: ")


        # =================================
        # EVALUATION
        # =================================

        print("\n=================================")
        print("          EVALUATION")
        print("=================================")

        score = 0

        if answer.strip() == "":

            print("❌ No answer submitted.")

        else:

            print("✅ Answer submitted!")
            print("Skill practiced:", practice_skill)

            answer_lower = answer.lower()
            
            
                        # =================================
            # PYTHON EVALUATION
            # =================================

            if practice_skill == "python":

                python_concepts = [
                    "variable",
                    "data type",
                    "input",
                    "output",
                    "if",
                    "loop",
                    "function",
                    "list",
                    "tuple",
                    "dictionary",
                    "set",
                    "operator"
                ]

                matched_concepts = [
                    concept for concept in python_concepts
                    if concept in answer_lower
                ]

                concept_count = len(matched_concepts)

                if concept_count >= 5:

                    score = 10
                    print("Score: 10/10")
                    print("Excellent! You understand Python basics.")

                elif concept_count >= 3:

                    score = 7
                    print("Score: 7/10")
                    print("Good! Review a few more Python concepts.")

                elif concept_count >= 1:

                    score = 4
                    print("Score: 4/10")
                    print("Keep practising Python fundamentals.")

                else:

                    score = 2
                    print("Score: 2/10")
                    print("Review variables, conditions, and loops.")


            

            

                
            # =================================
            # NUMPY EVALUATION
            # =================================

            if practice_skill == "numpy":

                if all(word in answer_lower for word in ["numpy", "array", "mean"]):

                    score = 10
                    print("Score: 10/10")
                    print("Excellent! You understand NumPy basics.")

                else:

                    score = 2
                    print("Score: 2/10")
                    print("Review NumPy arrays and mean().")



            # =================================
            # PANDAS EVALUATION
            # =================================

            elif practice_skill == "pandas":

                if (
                    "dataframe" in answer_lower
                    and "student" in answer_lower
                ):

                    score = 10

                    print("Score: 10/10")
                    print("Excellent! You understand Pandas DataFrame.")

                else:

                    score = 5

                    print("Score: 5/10")
                    print("Try creating a DataFrame with students and marks.")


            # =================================
            # SQL EVALUATION
            # =================================

            elif practice_skill == "sql":

                if (
                    "select" in answer_lower
                    and "80" in answer_lower
                ):

                    score = 10

                    print("Score: 10/10")
                    print("Great job! Your SQL query is correct.")

                else:

                    score = 5

                    print("Score: 5/10")
                    print("Try using SELECT with marks greater than 80.")


            # =================================
            # MACHINE LEARNING EVALUATION
            # =================================

            elif practice_skill == "machine learning":

                if (
                    (
                        "learn" in answer_lower
                        or "data" in answer_lower
                        or "prediction" in answer_lower
                    )
                    and
                    (
                        "example" in answer_lower
                        or "predict" in answer_lower
                    )
                ):

                    score = 10

                    print("Score: 10/10")
                    print("Excellent! You understand Machine Learning.")

                elif (
                    "learn" in answer_lower
                    or "data" in answer_lower
                    or "prediction" in answer_lower
                ):

                    score = 8

                    print("Score: 8/10")
                    print("Good explanation!")
                    print("Add a real-world example.")

                else:

                    score = 4

                    print("Score: 4/10")
                    print("Explain Machine Learning and give an example.")


            # =================================
            # STATISTICS EVALUATION
            # =================================

            elif practice_skill == "statistics":

                if "30" in answer_lower:

                    score = 10

                    print("Score: 10/10")
                    print("Correct! The mean is 30.")

                else:

                    score = 5

                    print("Score: 5/10")
                    print("Try calculating the mean again.")


            # =================================
            # PROGRESS TRACKER
            # =================================

            print("\n=================================")
            print("        YOUR PROGRESS")
            print("=================================")

            print("Target Job:", career)
            print("Current Skill:", practice_skill)
            print("Latest Score:", score, "/10")


            # =================================
            # NEXT SKILL
            # =================================

            if score >= 8:

                print("Status: ✅ Skill completed!")

                if practice_skill == "python":
                        next_skill = "numpy"

                elif practice_skill == "numpy":
                    next_skill = "pandas"

                elif practice_skill == "pandas":
                    next_skill = "machine learning"

                elif practice_skill == "machine learning":
                    next_skill = "completed"

                else:
                    next_skill = "completed"


                if next_skill == "completed":

                    print("\n🎉 Congratulations!")
                    print("You completed the learning path for", career)

                else:

                    print("Next Skill:", next_skill)
                    print("\n🚀 Great! You are ready for the next skill.")


            elif score >= 5:

                print("Status: 🟡 Needs more practice")
                print("Next Step: Practice", practice_skill, "again")


            else:

                print("Status: 🔴 Needs improvement")
                print("Next Step: Review", practice_skill, "basics")
                
# =================================
# NEXT SKILL PRACTICE
# =================================

if score >= 8 and next_skill == "pandas":

    print("\n=================================")
    print("       PANDAS PRACTICE")
    print("=================================")

    print("\nYour next skill: Pandas")

    print("\nChallenge:")
    print("Create a Pandas DataFrame containing 3 students")
    print("and their marks.")

    print("\n---------------------------------")

    pandas_answer = input("Enter your answer: ")

    print("\n=================================")
    print("       PANDAS EVALUATION")
    print("=================================")

    pandas_score = 0

    if pandas_answer.strip() == "":

        print("❌ No answer submitted.")

    else:

        pandas_answer_lower = pandas_answer.lower()

        if (
            "dataframe" in pandas_answer_lower
            and "student" in pandas_answer_lower
        ):

            pandas_score = 10

            print("Score: 10/10")
            print("Excellent! You understand Pandas DataFrame.")

        else:

            pandas_score = 5

            print("Score: 5/10")
            print("Good attempt!")
            print("Try creating a DataFrame with students and marks.")

    print("\n=================================")
    print("       UPDATED PROGRESS")
    print("=================================")

    print("Target Job:", career)
    print("Pandas Score:", pandas_score, "/10")

    if "pandas_score" in globals() and pandas_score >= 8:

        print("Status: ✅ Pandas completed!")
        print("Next Skill: machine learning")
        print("\n🚀 You are ready for Machine Learning!")

    else:

        print("Status: 🟡 Pandas needs more practice.")
        # =================================
# MACHINE LEARNING PRACTICE
# =================================

if "pandas_score" in globals() and pandas_score >= 8:

    print("\n=================================")
    print("   MACHINE LEARNING PRACTICE")
    print("=================================")

    print("\nYour next skill: Machine Learning")

    print("\nChallenge:")
    print("Explain in your own words what Machine Learning is.")
    print("Give one real-world example.")

    print("\n---------------------------------")

    ml_answer = input("Enter your answer: ")

    print("\n=================================")
    print("   MACHINE LEARNING EVALUATION")
    print("=================================")

    ml_score = 0

    if ml_answer.strip() == "":

        print("❌ No answer submitted.")

    else:

        ml_answer_lower = ml_answer.lower()

        if (
            (
                "learn" in ml_answer_lower
                or "data" in ml_answer_lower
                or "prediction" in ml_answer_lower
            )
            and
            (
                "example" in ml_answer_lower
                or "predict" in ml_answer_lower
            )
        ):

            ml_score = 10

            print("Score: 10/10")
            print("Excellent!")
            print("You understand the basic idea of Machine Learning.")

        elif (
            "learn" in ml_answer_lower
            or "data" in ml_answer_lower
            or "prediction" in ml_answer_lower
        ):

            ml_score = 8

            print("Score: 8/10")
            print("Good explanation!")
            print("Try adding a real-world example.")

        else:

            ml_score = 4

            print("Score: 4/10")
            print("Your answer needs more explanation.")

    print("\n=================================")
    print("      FINAL PROGRESS")
    print("=================================")

    print("Target Job:", career)
    print("NumPy: 10/10")
    print("Pandas:", pandas_score, "/10")
    print("Machine Learning:", ml_score, "/10")

    if ml_score >= 8:

        print("\n🎉 Congratulations!")
        print("You completed the core learning path for", career)

    else:

        print("\n🟡 Machine Learning needs more practice.")