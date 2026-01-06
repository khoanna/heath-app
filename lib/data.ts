
export const MEALS = [
    {
        id: "grilled-salmon-salad",
        title: "Grilled Salmon Salad",
        description: "Omega-3 rich salmon with fresh greens",
        time: "25 min",
        calories: 420,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500",
        macros: { p: "35g", c: "18g", f: "22g" },
        category: "lunch",
        ingredients: [
            { name: "Salmon Fillet", amount: "150g" },
            { name: "Mixed Greens", amount: "2 cups" },
            { name: "Cherry Tomatoes", amount: "1/2 cup" },
            { name: "Lemon", amount: "1/2" },
            { name: "Olive Oil", amount: "1 tbsp" }
        ],
        instructions: [
            { step: 1, text: "Season salmon with salt, pepper, and lemon juice.", time: "2 min" },
            { step: 2, text: "Grill salmon for 4-5 minutes per side.", time: "10 min" },
            { step: 3, text: "Toss greens and tomatoes with olive oil.", time: "3 min" },
            { step: 4, text: "Serve salmon atop the salad.", time: "1 min" }
        ]
    },
    {
        id: "quinoa-power-bowl",
        title: "Quinoa Power Bowl",
        description: "Protein-packed quinoa with vegetables",
        time: "30 min",
        calories: 380,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
        macros: { p: "15g", c: "52g", f: "12g" },
        category: "lunch",
        ingredients: [
            { name: "Quinoa", amount: "1/2 cup" },
            { name: "Chickpeas", amount: "1/2 cup" },
            { name: "Cucumber", amount: "1/2" },
            { name: "Feta Cheese", amount: "2 tbsp" },
            { name: "Hummus", amount: "2 tbsp" }
        ],
        instructions: [
            { step: 1, text: "Rinse and cook quinoa according to package.", time: "15 min" },
            { step: 2, text: "Chop cucumber and rinse chickpeas.", time: "5 min" },
            { step: 3, text: "Assemble bowl with quinoa base.", time: "2 min" },
            { step: 4, text: "Add toppings and hummus.", time: "2 min" }
        ]
    },
    {
        id: "greek-chicken-bowl",
        title: "Greek Chicken Bowl",
        description: "Grilled chicken with mediterranean flavors",
        time: "35 min",
        calories: 450,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=500",
        macros: { p: "38g", c: "35g", f: "18g" },
        category: "dinner",
        ingredients: [
            { name: "Chicken Breast", amount: "200g" },
            { name: "Cucumber", amount: "1" },
            { name: "Olives", amount: "5-6" },
            { name: "Red Onion", amount: "1/4" },
            { name: "Tzatziki", amount: "2 tbsp" }
        ],
        instructions: [
            { step: 1, text: "Marinate chicken in oregano and lemon.", time: "10 min" },
            { step: 2, text: "Grill chicken until cooked through.", time: "15 min" },
            { step: 3, text: "Chop veggies.", time: "5 min" },
            { step: 4, text: "Assemble bowl and top with tzatziki.", time: "2 min" }
        ]
    },
    {
        id: "berry-smoothie-bowl",
        title: "Berry Smoothie Bowl",
        description: "Antioxidant-rich berry blend",
        time: "12 min",
        calories: 290,
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80&w=500",
        macros: { p: "8g", c: "48g", f: "7g" },
        category: "breakfast",
        ingredients: [
            { name: "Frozen Berries", amount: "1.5 cups" },
            { name: "Banana", amount: "1 frozen" },
            { name: "Almond Milk", amount: "1/2 cup" },
            { name: "Granola", amount: "2 tbsp" },
            { name: "Coconut Flakes", amount: "1 tbsp" }
        ],
        instructions: [
            { step: 1, text: "Add berries, banana, and milk to blender.", time: "2 min" },
            { step: 2, text: "Blend until smooth and thick.", time: "2 min" },
            { step: 3, text: "Pour into a bowl.", time: "1 min" },
            { step: 4, text: "Top with granola and coconut.", time: "2 min" }
        ]
    }
]

export const ARTICLES = [
    {
        id: "10-superfoods-immune",
        title: "10 Superfoods to Boost Your Immune",
        author: "Dr. Sarah Johnson",
        role: "Nutritionist",
        timeAgo: "2h ago",
        readTime: "8 min",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=500",
        content: [
            { type: "paragraph", text: "In today's world, maintaining a strong immune system is more important than ever. While there's no magic bullet for perfect health, incorporating certain nutrient-dense foods into your diet can significantly support your body's natural defense mechanisms." },
            { type: "heading", text: "1. Citrus Fruits" },
            { type: "paragraph", text: "Packed with vitamin C, citrus fruits like oranges, grapefruits, and lemons help increase the production of white blood cells, which are key to fighting infections. Just one medium orange provides more than 90% of your daily vitamin C needs." },
            { type: "heading", text: "2. Garlic" },
            { type: "paragraph", text: "This powerful ingredient contains compounds like allicin that have been shown to boost the immune system's response to fighting off viruses. Add fresh garlic to your meals regularly for maximum benefits." },
            { type: "heading", text: "3. Spinach" },
            { type: "paragraph", text: "Rich in vitamin C, antioxidants, and beta carotene, spinach may enhance the infection-fighting ability of our immune systems. Cook it as little as possible to retain its nutrients." }
        ],
        tags: ["#Immune System", "#Superfoods", "#Nutrition", "#Health Tips", "#Wellness"]
    },
    {
        id: "hiit-vs-steady-cardio",
        title: "HIIT vs. Steady Cardio: Which Is Better?",
        author: "Mike Anderson",
        role: "Fitness Coach",
        timeAgo: "1d ago",
        readTime: "6 min",
        category: "Fitness",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500",
        content: [
            { type: "paragraph", text: "Both High-Intensity Interval Training (HIIT) and Low-Intensity Steady State (LISS) cardio have their place in a well-rounded fitness routine. The best choice depends on your goals, fitness level, and time availability." }
        ],
        tags: ["#Fitness", "#Cardio", "#HIIT", "#Workout"]
    },
    {
        id: "managing-stress-mindfulness",
        title: "Managing Stress Through Mindfulness",
        author: "Emma Williams",
        role: "Psychologist",
        timeAgo: "1d ago",
        readTime: "7 min",
        category: "Mental Health",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
        content: [
            { type: "paragraph", text: "Mindfulness is the practice of purposely focusing your attention on the present moment—and accepting it without judgment. Mindfulness is now being examined scientifically and has been found to be a key element in stress reduction and overall happiness." }
        ],
        tags: ["#MentalHealth", "#Mindfulness", "#StressRelief", "#Meditation"]
    },
     {
        id: "hydration-how-much",
        title: "Hydration: How Much Water Do You Really Need?",
        author: "Dr. Alex Rivera",
        role: "Dietitian",
        timeAgo: "2d ago",
        readTime: "4 min",
        category: "Wellness",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=500",
        content: [
            { type: "paragraph", text: "Water is your body's principal chemical component and makes up about 50% to 70% of your body weight. Your body depends on water to survive. Every cell, tissue and organ in your body needs water to work properly." }
        ],
        tags: ["#Hydration", "#Water", "#Wellness", "#HealthTips"]
    },
     {
        id: "plant-based-protein",
        title: "Plant-Based Protein: Complete Guide",
        author: "Lisa Anderson",
        role: "Nutritionist",
        timeAgo: "2d ago",
        readTime: "9 min",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
        content: [
            { type: "paragraph", text: "For many people, protein comes from meat, eggs, and dairy. But you can also get protein from plants. Nuts, seeds, soy products, beans, and lentils are all great sources." }
        ],
        tags: ["#PlantBased", "#Protein", "#Nutrition", "#Vegan"]
    }
]
