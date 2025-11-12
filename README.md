#  **FoodWagen – A2SV Technical Interview Project**

**FoodWagen** is a responsive and accessible food management web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It allows users to view, search, add, edit, and delete food items while maintaining clean UI consistency and robust state management.  

This project was developed as part of the **A2SV Technical Interview Assessment**, focusing on translating Figma designs into functional web applications with strong attention to code structure, performance, and maintainability.

---

##  **Project Overview**

FoodWagen demonstrates core frontend engineering principles, including:  
- Translating design specifications into high-quality, reusable UI components.  
- Managing asynchronous operations with a real-world API.  
- Implementing form validation, error handling, and loading states.  
- Following accessibility and naming conventions for scalability and clarity.  

The project integrates with a **mock REST API** and includes unit tests covering rendering, user interaction, and API mocking.

---

##  **Key Features**

 **Food Listing:** Displays a list of all available food items with detailed restaurant information.  
 **Search Functionality:** Filters foods dynamically based on user input.  
 **Add / Edit / Delete:** Fully functional CRUD operations with validation and visual feedback.  
 **Form Validation:** Includes clear, accessible error messages and input guidance.  
 **Responsive Design:** Seamless experience across mobile, tablet, and desktop screens.  
 **Smooth Animations:** Subtle slide-up entry and hover effects that enhance user experience.  
 **Loading States:** Visual indicators and disabled interactions during API calls.  

---

##  **Tech Stack**

| Technology | Purpose |
|-------------|----------|
| **Next.js 14** | Framework for server-rendered React applications |
| **TypeScript** | Type-safe development and maintainable code |
| **Tailwind CSS** | Utility-first styling framework |
| **React Query** | Server-state management and caching |
| **Axios** | API communication and HTTP client |
| **Lucide React** | Scalable vector icons |
| **Jest & React Testing Library** | Unit and integration testing framework |

---

##  **API Integration**

The project consumes the mock API below to manage food and restaurant data:

```
Base URL: https://6852821e0594059b23cdd834.mockapi.io/Food
```

### Endpoints
- **GET /Food** – Retrieve all food items  
- **GET /Food?name=[query]** – Filter foods by name  
- **POST /Food** – Create a new food item  
- **PUT /Food/:id** – Update existing food data  
- **DELETE /Food/:id** – Delete a food item  

---

##  **Core Components**

| Component | Responsibility |
|------------|----------------|
| **FoodCard** | Displays food details and restaurant info |
| **SearchBar** | Filters food items based on user query |
| **AddFoodModal** | Adds a new food item with validation |
| **EditFoodModal** | Edits an existing food item |
| **DeleteFoodModal** | Confirms and deletes selected food |
| **InputField** | Reusable and accessible input component |
| **Loader** | Handles visual loading states |

---

##  **Form Validation & Error Handling**

Each form field is validated based on the provided guidelines.  
Error messages are user-friendly and accessible via ARIA attributes.

| Field | Validation | Error ID | Message |
|--------|-------------|----------|----------|
| Food Name | Required | `food-name-error` | *Food Name is required* |
| Food Rating | 1–5 range | `food-rating-error` | *Food Rating must be a number between 1 and 5* |
| Food Image URL | Required | `food-image-error` | *Food Image URL is required* |
| Restaurant Name | Required | `restaurant-name-error` | *Restaurant Name is required* |
| Restaurant Logo URL | Required | `restaurant-logo-error` | *Restaurant Logo URL is required* |
| Restaurant Status | Must be “Open Now” or “Closed” | `restaurant-status-error` | *Restaurant Status must be ‘Open Now’ or ‘Closed’* |

---

##  **Testing**

Testing ensures stability, correctness, and reliability of critical features.  

### Coverage Includes:
1. **Component Rendering:** Ensures components render correctly with given props.  
2. **User Interaction:** Tests button clicks and form submissions.  
3. **API Mocking:** Verifies both success and error states of API requests.

Run tests with:
```bash
npm run test
```

All network calls are **mocked** using Jest and React Testing Library.

---

## **Local Development**

### Prerequisites
- Node.js ≥ 18  
- npm, yarn, or pnpm

### Installation
```bash
git clone https://github.com/<your-username>/foodwagen.git
cd foodwagen
npm install
```

### Run the Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
npm run start
```

---

##  **Deployment**

The project is deployed on **Vercel** for production hosting.

 **Live Demo:** [https://food-wagen-jaee.vercel.app/  
 **GitHub Repository:** [(https://github.com/Niyonkuru2/FoodWagen.git)

---

##  **Project Structure**

```
├── app/                # App router (Next.js 14)
├── components/         # Reusable UI components
├── hooks/              # Custom hooks (useFoodForm, etc.)
├── services/           # API and data services
├── public/             # Static assets
├── styles/             # Global and Tailwind styles
└── tests/              # Unit and integration tests
```

---

##  **Highlights**

- Fully compliant with **A2SV Candidate Submission Guidelines**  
- Consistent **food-** prefix naming for CSS classes and test IDs  
- Clean, modular, and well-documented code structure  
- Accessible and semantic HTML  
- Smooth animations and responsive UI  

---

##  **Author**

**NIYONKURU Samuel**  
Frontend Developer | A2SV Candidate  
 Kigali, Rwanda  
 **sniyo55@gmail.com**  
 [GitHub Profile](https://github.com/niyonkuru2)   

---

##  **License**

This project is open source and available under the [MIT License](LICENSE).
