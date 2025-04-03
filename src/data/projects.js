const projectsData = [
    {
      id: 1,
      title: "Customer Segmentation Analysis",
      summary: "Used K-means clustering to identify customer segments for targeted marketing.",
      description: "This project involved analyzing customer data to identify distinct segments that could be targeted with specific marketing strategies. I used unsupervised machine learning techniques to discover natural groupings in the data.",
      problem: "The company was spending a significant amount on general marketing campaigns with limited ROI. They needed to understand their customer base better to create more targeted and effective marketing strategies.",
      methodology: "I collected and preprocessed customer data, including demographics, purchase history, and engagement metrics. After exploratory data analysis, I applied K-means clustering to identify distinct customer segments. I evaluated different numbers of clusters using the elbow method and silhouette score.",
      results: "Identified 4 distinct customer segments with unique characteristics and purchasing patterns. This allowed the marketing team to develop targeted campaigns for each segment, resulting in a 25% increase in campaign ROI.",
      image: "/placeholder.jpg",
      category: "machine-learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/yourusername/customer-segmentation",
      date: "January 2023",
      visualizations: [
        {
          image: "/placeholder.jpg",
          caption: "Cluster visualization using PCA to reduce dimensions"
        },
        {
          image: "/placeholder.jpg",
          caption: "Key characteristics of each customer segment"
        }
      ]
    },
    {
      id: 2,
      title: "Sales Forecasting Model",
      summary: "Implemented time series analysis to predict future sales with 92% accuracy.",
      description: "This project focused on developing a time series forecasting model to predict future sales for a retail business. The model helps in inventory management and business planning.",
      problem: "The company struggled with inventory management due to unpredictable sales patterns, leading to stockouts or excess inventory. They needed a reliable method to forecast future sales.",
      methodology: "I collected 3 years of historical sales data and performed time series decomposition to understand trends and seasonality. After preprocessing, I tested several forecasting models including ARIMA, SARIMA, and Prophet, evaluating them based on RMSE and MAE metrics.",
      results: "The final Prophet model achieved 92% accuracy in forecasting monthly sales for a 6-month horizon. The model successfully captured seasonal patterns and special events, helping the company optimize their inventory levels.",
      image: "/placeholder.jpg",
      category: "data-analysis",
      technologies: ["Python", "Prophet", "Pandas", "NumPy", "Statsmodels"],
      github: "https://github.com/yourusername/sales-forecasting",
      demo: "https://yourusername.github.io/sales-forecasting-demo",
      date: "June 2023",
      visualizations: [
        {
          image: "/placeholder.jpg",
          caption: "Time series decomposition showing trend and seasonality"
        },
        {
          image: "/placeholder.jpg",
          caption: "Actual vs predicted sales over the test period"
        }
      ]
    },
    {
      id: 3,
      title: "Interactive COVID-19 Dashboard",
      summary: "Built an interactive dashboard to visualize COVID-19 data across countries.",
      description: "This project involved creating an interactive web dashboard to visualize and explore COVID-19 data from around the world, allowing users to compare countries and track the pandemic's evolution.",
      problem: "During the pandemic, there was a need for accessible, clear visualization of COVID-19 statistics to help the public and policymakers understand the situation's development across different regions.",
      methodology: "I developed a React-based dashboard that fetches data from the Johns Hopkins University COVID-19 data repository. The application processes and visualizes the data using D3.js and Chart.js, offering various visualization options and filtering capabilities.",
      results: "The dashboard provides interactive visualizations of cases, deaths, recoveries, and vaccination rates across countries. Users can compare regions, view trends over time, and explore correlations between different metrics.",
      image: "/placeholder.jpg",
      category: "data-visualization",
      technologies: ["JavaScript", "React", "D3.js", "Chart.js", "CSS"],
      github: "https://github.com/yourusername/covid-dashboard",
      demo: "https://yourusername.github.io/covid-dashboard",
      date: "April 2022",
      visualizations: [
        {
          image: "/placeholder.jpg",
          caption: "Global map showing case distribution"
        },
        {
          image: "/placeholder.jpg",
          caption: "Comparative analysis of multiple countries"
        }
      ]
    }
  ];
  
  export default projectsData;