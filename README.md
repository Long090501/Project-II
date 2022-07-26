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

### `npm i @material-ui/core --legacy-peer-deps` (thư viện @material-ui/core cung cấp xử lý Table và PopUpDiaLog)

### `npm i react-infinite-calendar` (thư viện react-infinite-calendar cung cấp xử lý Calendar)

### `npm i json-server` (thư viện json-server cung cấp xử lý REST API)

## Thực thi các chương trình

Sau khi đã cài đặt xong dự án Project II cùng các thư viện đi kèm, ta sẽ import các component tương ứng của từng chương trình vào trong file App.js

![Screenshot 2022-07-26 234351](https://user-images.githubusercontent.com/96682226/181063358-d0375c46-cb68-4c9a-8675-2becbf8fbcec.png)

Muốn thực thi chương trình nào, chúng ta chỉ cần render component tương ứng của chúng ra giao diện như hình trên

Cuối cùng, trong Terminal, chạy lệnh `npm start` và chương trình sẽ tự động được tiến hành thực thi trên trình duyệt 

![Screenshot 2022-07-26 235045](https://user-images.githubusercontent.com/96682226/181064665-6f21a35d-14bc-42a8-8d80-b428cdfa536a.png)
