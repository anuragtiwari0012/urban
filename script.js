document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let exercises = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        exercises = `Focus on strength training exercises such as:
        <ul>
            <li>Weight lifting</li>
            <li>Resistance band exercises</li>
            <li>Bodyweight exercises (push-ups, squats, lunges)</li>
        </ul>
        Pair with a high-calorie, nutrient-dense diet.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        exercises = `Maintain a balanced routine with:
        <ul>
            <li>Moderate cardio (running, cycling, swimming)</li>
            <li>Strength training (weight lifting, bodyweight exercises)</li>
            <li>Flexibility exercises (yoga, stretching)</li>
        </ul>`;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        exercises = `Focus on burning fat with:
        <ul>
            <li>High-intensity interval training (HIIT)</li>
            <li>Cardio exercises (running, cycling, swimming)</li>
            <li>Strength training to build muscle (weight lifting, resistance bands)</li>
        </ul>`;
    } else {
        category = 'Obesity';
        exercises = `Start with low-impact exercises and gradually increase intensity:
        <ul>
            <li>Walking</li>
            <li>Swimming</li>
            <li>Low-impact aerobics</li>
        </ul>
        Consult a healthcare provider for a personalized exercise plan.`;
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
    document.getElementById('exercise').innerHTML = `Suggested exercises: ${exercises}`;
});
