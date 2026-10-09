
from flask import Flask, render_template, request, jsonify

app = Flask(
    __name__,
    template_folder=".",
    static_folder=".",
    static_url_path=""
)

career_skills = {
    "ml engineer": [
        "python", "numpy", "pandas",
        "machine learning", "sql"
    ],
    "data analyst": [
        "python", "sql", "excel",
        "pandas", "statistics"
    ],
    "python developer": [
        "python", "git", "sql",
        "flask", "apis"
    ]
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/profile", methods=["POST"])
def create_profile():
    data = request.get_json(silent=True) or {}

    name = str(data.get("name", "")).strip()
    career = str(data.get("career", "")).strip().lower()
    skills_text = str(data.get("skills", "")).lower()
    hours = data.get("hours", "2")

    current_skills = skills_text.replace(",", " ").split()

    if not name:
        return jsonify({"error": "Please enter your name."}), 400

    if career not in career_skills:
        return jsonify({"error": "Please select a valid career."}), 400

    missing_skills = [
        skill for skill in career_skills[career]
        if skill not in current_skills
    ]

    roadmap = []

    if missing_skills:
        for day in range(7):
            skill_index = min(day * len(missing_skills) // 7, len(missing_skills) - 1)
            skill = missing_skills[skill_index]

            if day == 6:
                task = (
                    "Build a small project using the skills you learned "
                    "and review your progress."
                )
            else:
                task = (
                    "Learn the basics of "
                    + skill
                    + " and complete a practical exercise."
                )

            roadmap.append({
                "day": day + 1,
                "skill": skill,
                "hours": hours,
                "task": task
            })
    else:
        for day in range(7):
            roadmap.append({
                "day": day + 1,
                "skill": "Revision",
                "hours": hours,
                "task": "Review your existing skills and build a small project."
            })

    return jsonify({
        "name": name,
        "career": career,
        "current_skills": current_skills,
        "missing_skills": missing_skills,
        "roadmap": roadmap
    })


if __name__ == "__main__":
    app.run(debug=True)
