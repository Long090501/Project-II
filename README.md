# Hướng dẫn cài đặt dự án Project II

(Yêu cầu bắt buộc trước hết đó là phải cài đặt Node.js trong máy)

Dự án của em hướng đến việc giải quyết 4 bài tập thực hành mà thầy giáo đã đưa ra trong học phần Project II

Nội dung chính của chúng như sau:

- Bài tập 1: Thao tác với Data Table
- Bài tập 2: Hiển thị ảnh theo lưới
- Bài tập 3: Vẽ mê cung
- Bài tập 4: Tạo simulation đối tượng di chuyển theo lịch trình được lập

## Các bước cài đặt 1 dự án React cơ bản

create-react-app là một thư viện giúp chúng ta đơn giản hóa trong quá trình cài đặt và xây dựng một dự án React.

B1: Tải Git về máy để có thể sử dụng công cụ Git Bash giúp đơn giản hóa khi thao tác với terminal trong từng thư mục mà ta mong muốn.

B2: Truy cập vào thư mục "Workspace" (là thư mục mà em đã tạo ra trên máy để lưu trữ dự án Project II của mình, hoàn toàn có thể tùy ý sửa tên thư mục theo ý thích của bản thân) và click chuột phải chọn "Git Bash Here"

B3: Cửa sổ Git Bash hiện lên và ta sẽ chạy dòng lệnh sau để tạo ra 1 dự án React trong thư mục "Workspace":

### `npx create-react-app tenduan` (Ở đây giả sử em sẽ đặt tên dự án là project_2)

Quá trình này thường sẽ diễn ra trong vòng một vài phút.

![Screenshot 2022-07-26 133041](https://user-images.githubusercontent.com/96682226/180938892-83983f83-1f22-4bb3-ab2d-ad11cc6f425c.png)

Khi cửa sổ Git Bash hiển thị như hình trên tức là quá trình khởi tạo dự án đã hoàn tất.

Lúc này, thư mục "project_2" đã được tạo ra trong thư mục "Workspace" chứa một dự án React cơ bản ban đầu

![image](https://user-images.githubusercontent.com/96682226/180942680-bdb44864-a7f2-4da1-a214-9852c8ebfcd3.png)

## Các bước cài đặt dự án Project II

Sau khi đã cài đặt xong dự án React cơ bản như ở bên trên, việc tiếp theo cần làm đó chính là cài đặt dự án Project II sử dụng source code trên Git Hub

Để làm được điều này, chúng ta chỉ cần đưa các thư mục trong thư mục "src" ở trên Git Hub vào thư mục "src" ở trong dự án React cơ bản vừa cài đặt

Tuy nhiên, để các chương trình có thể hoạt động một cách bình thường, chúng ta cần phải tiến hành cài đặt 1 số thư viện khác của React nhằm phục vụ cho xử lý ở các bài tập

### `npm i @material-ui/core --legacy-peer-deps` (thư viện @material-ui/core cung cấp các công cụ cho xử lý Table, Calender và PopUpDiaLog

### `npm i react-infinite-calendar`

### `npm i json-server`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
