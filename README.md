Here’s a polished version of your **Masked Image Uploader** README in the requested style:

---

# **Masked Image Uploader**  

A **powerful tool** for creating masks on uploaded images, designed for intuitive user interaction and seamless export functionality.  

🌐 [Live Demo](https://masked-image-uploader.vercel.app)  

---

## 🚀 **Features**  

- **Image Upload**: Upload images (JPEG/PNG) for editing.  
- **Mask Drawing**: Draw masks with white brushes on a black background.  
- **Brush Controls**: Adjust brush size for precise editing.  
- **Export Functionality**: Save and download the original image and its mask as a pair.  
- **Side-by-Side Display**: View the original image and the generated mask together.  
- **Optional Backend**: FastAPI server to store and retrieve images.  

---

## 🛠️ **Tech Stack**  

- **Frontend**: React.js, TailwindCSS, react-canvas-draw  
- **Backend (Optional)**: FastAPI, Uvicorn  
- **Deployment**: Vercel  

---

## 🖥️ **Getting Started**  

### ⚙️ Prerequisites  

- Node.js (v14+)  
- Python 3.9+ (if using the backend)  

### 🛠️ Installation  

#### **Frontend Setup**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/0prateeksingh0/Masked-image-uploader.git  
   cd Masked-image-uploader  
   ```  

2. Install dependencies:  
   ```bash
   npm install  
   ```  

3. Start the React app locally:  
   ```bash
   npm start  
   ```  

The app will be available at [http://localhost:3000](http://localhost:3000).  

#### **Backend Setup (Optional)**  

1. Navigate to the backend directory:  
   ```bash
   cd backend  
   ```  

2. Create and activate a Python virtual environment:  
   ```bash
   python -m venv venv  
   source venv/bin/activate  # For macOS/Linux  
   venv\Scripts\activate  # For Windows  
   ```  

3. Install the required Python packages:  
   ```bash
   pip install -r requirements.txt  
   ```  

4. Start the FastAPI backend:  
   ```bash
   uvicorn main:app --reload  
   ```  

The backend will be available at [http://localhost:8000](http://localhost:8000).  

---

## ✨ **Screenshots**  

### **Image Upload**  
![Upload Screen](https://github.com/user-attachments/assets/a70a86d1-0f91-4abd-baad-44e058fb4706)  

### **Mask Drawing**  
![Mask Drawing](https://github.com/user-attachments/assets/95921f87-ea7f-4059-ba65-6497718cc547)  

### **Side-by-Side View**  
![Side-by-Side View](https://github.com/user-attachments/assets/c2c13a0f-762c-433c-bfff-7673ccb201c5)  

---

## 📌 **Future Enhancements**  

- **AI Integration**: Add an inpainting feature with ML models.  
- **Cloud Storage**: Use AWS S3 or similar for scalable image storage.  
- **Mask Refinement**: Include tools for erasing or refining drawn masks.  

---

## 🤝 **Contributing**  

Contributions are welcome! Fork the repository and submit a pull request.  

---

## 🛡️ **License**  

This project is licensed under the MIT License.  

---

## 📞 **Contact**  

- **Author**: Prateek Singh  
- **Email**: [prateeksingh6125@gmail.com](mailto:prateeksingh6125@gmail.com)  
- **LinkedIn**: [Prateek Singh](https://www.linkedin.com/in/prateek-singh-2035151b8/)  

---

**Happy Coding!** 🚀  

---

Let me know if you'd like further refinements!
