# Deployment & Hosting Guide 🚀

The project has been compiled into a production-ready package. You have two options ready for deployment:
1. **ZIP File (Ready to upload):**
   `C:\Users\HP\Documents\antigravity\sharp-galileo\delivery-boy-app\outlet-inventory-deploy.zip` (46.7 MB)
2. **Folder (Unpacked):**
   `C:\Users\HP\Documents\antigravity\sharp-galileo\delivery-boy-app\deploy_package`

---

## 🌟 Option 1: Free Hosting on Vercel (Easiest & Fastest - 100% Recommended)

Next.js is created by Vercel, making it the most seamless platform to host for free with automatic SSL (HTTPS).

1. Go to [vercel.com](https://vercel.com) and create a free account (Sign up with GitHub or Email).
2. Install Vercel CLI in your project terminal:
   ```bash
   cd delivery-boy-app
   npx vercel
   ```
3. Follow the on-screen prompts (takes ~30 seconds).
4. Add your Environment Variables in the Vercel Project Dashboard:
   - `WORDPRESS_URL` = `https://your-wordpress-site.com`
   - `WC_CONSUMER_KEY` = `ck_...`
   - `WC_CONSUMER_SECRET` = `cs_...`
   - `DELIVERY_PIN` = `1234`
5. Done! Your web app will be live at `https://your-project.vercel.app`.

---

## 🌟 Option 2: Hosting on cPanel / Node.js Server / Linux VPS

If you already have a Web Hosting server (cPanel with "Setup Node.js App" or Ubuntu/Debian VPS):

1. Upload `outlet-inventory-deploy.zip` to your server and Extract it.
2. Open `.env` and fill in your WooCommerce URL and API Keys:
   ```env
   WORDPRESS_URL=https://your-wordpress-site.com
   WC_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxxxxxx
   WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxxxxxx
   DELIVERY_PIN=1234
   ```
3. In the terminal on the server, install production dependencies:
   ```bash
   npm install --omit=dev
   ```
4. Start the app:
   - **Using PM2 (Recommended for 24/7 background running):**
     ```bash
     npm install -g pm2
     pm2 start npm --name "outlet-inventory" -- start
     pm2 save
     pm2 startup
     ```
   - **Or using standard npm:**
     ```bash
     npm start
     ```

---

## 🌟 Option 3: Hosting with Docker

A production-ready `Dockerfile` is already included.

1. Build the Docker Image:
   ```bash
   docker build -t outlet-inventory .
   ```
2. Run the Container:
   ```bash
   docker run -d -p 3000:3000 --name outlet-inventory-app --env-file .env outlet-inventory
   ```

---

## 🌟 Option 4: Permanent Local Hosting on Outlet Laptop / Office PC

If you only want staff inside the outlet to use this system without paying for cloud hosting:

1. Double-click `start_inventory_system.bat` or run:
   ```bash
   cd delivery-boy-app
   npm start
   ```
2. Any computer, tablet, or phone connected to the outlet's Wi-Fi network can access it via:
   `http://<LAPTOP_LOCAL_IP>:3000`
