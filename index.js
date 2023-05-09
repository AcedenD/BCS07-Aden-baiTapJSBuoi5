console.log("Hello mentors");

//  Bai 1

/*

    B1: Input

    - Điểm chuẩn
    - Điểm môn 1
    - Điểm môn 2
    - Điểm môn 3
    - Khu vực
    - Đối tượng

    B2: Steps

    - Tạo biến điểm chuẩn
    - Tạo biến điểm môn 1
    - Tạo biến điểm môn 2
    - Tạo biến điểm môn 3
    - Tạo biến tổng điểm
    - Tạo biến khu vực
    - Tạo biến đối tượng
    - Tính tổng điểm
    - So sánh tổng điểm với điểm chuẩn
    - In kết quả

    B3: Output

    - In kết quả

*/
function tinhDiem(){
    var diemChuan = +document.getElementById("diemChuan").value;

    var diemMonNhat = +document.getElementById("diemMonNhat").value;

    var diemMonHai = +document.getElementById("diemMonHai").value;

    var diemMonBa = +document.getElementById("diemMonBa").value;

    var khuVuc = +document.getElementById("chonKhuVuc").value;

    var doiTuong = +document.getElementById("chonDoiTuong").value;

    var tongDiem = diemMonNhat + diemMonHai + diemMonBa + khuVuc + doiTuong;

    console.log(tongDiem);

    if(diemMonNhat === 0 || diemMonHai === 0 || diemMonBa === 0){
        document.getElementById("hienKetQua1").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        return;
    }
    

    if(tongDiem >= diemChuan){
        document.getElementById("hienKetQua1").className = "text-success"

        document.getElementById("hienKetQua1").innerHTML = "Bạn đã đậu với tổng điểm là: " + tongDiem + " và điểm chuẩn là: " + diemChuan;
    }else{
        document.getElementById("hienKetQua1").className = "text-danger"

        document.getElementById("hienKetQua1").innerHTML = "Bạn đã rớt với tổng điểm là: " + tongDiem + " và điểm chuẩn là: " + diemChuan;
    }

}

document.getElementById("btnTinhDiem").onclick = tinhDiem;




// Bai 2

/*

    B1: Input

    - Họ tên
    - Số KW

    B2: Steps

    - Tạo biến họ tên
    - Tạo biến số KW
    - Tạo biến tiền điện
    - Tính tiền điện
    - In kết quả

    B3: Output

    - In kết quả

*/

function tinhTienDien(){
    var hoTen = document.getElementById("hoTen2").value;

    console.log(hoTen);

    var soKw = +document.getElementById("soKw").value;

    // console.log(soKw);

    var tienDien = 0;

    if(soKw <= 50){
        tienDien = soKw * 500;
    }else if(soKw > 50 && soKw <= 100){
        tienDien = 50 * 500 + (soKw - 50) * 650;
    }else if(soKw > 100 && soKw <= 200){
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    }else if(soKw > 200 && soKw <= 350){
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    }else if(soKw > 350){
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    document.getElementById("hienKetQua2").innerHTML = "Số tiền điện của " + hoTen + " là: " + tienDien + " VNĐ";
}

document.getElementById("btnTinhTienDien").onclick = tinhTienDien;



// Bai 3

/*

    B1: Input

    - Họ tên
    - Thu nhập
    - Số người phụ thuộc

    B2: Steps

    - Tạo biến họ tên
    - Tạo biến thu nhập
    - Tạo biến số người phụ thuộc
    - Tạo biến thu nhập chịu thuế
    - Tạo biến tiền thuế
    - Tính tiền thuế
    - In kết quả

    B3: Output

    - In kết quả

*/


function tinhTienThue(){
    var hoTen = document.getElementById("hoTen3").value;

    var thuNhap = +document.getElementById("thuNhap").value;

    var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;

    var thuNhapChiuThue = thuNhap - 4000000 - nguoiPhuThuoc * 1600000;

    var tienThue = 0;

    if(thuNhapChiuThue <= 60000000){
        tienThue = thuNhapChiuThue * 0.05;
    }else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        tienThue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    }else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        tienThue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    }else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        tienThue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    }else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        tienThue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    }else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        tienThue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    }else if(thuNhapChiuThue > 960000000){
        tienThue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }



    document.getElementById("hienKetQua3").innerHTML = "Số tiền thuế của " + hoTen + " là: " + tienThue.toLocaleString() + " VNĐ";
}

document.getElementById("btnTinhTienThue").onclick = tinhTienThue;


// Bai 4

/*

    B1: Input

    - Khách hàng
    - Mã khách hàng
    - Số kênh
    - Số kết nối

    B2: Steps

    - Tạo biến khách hàng
    - Tạo biến mã khách hàng
    - Tạo biến số kênh
    - Tạo biến số kết nối
    - Tạo biến tiền cáp
    - Tính tiền cáp
    - In kết quả

    B3: Output

    - In kết quả

*/

var khachHang = document.getElementById("khachHang");

khachHang.addEventListener("input", function(){
    var khachHang = document.getElementById("khachHang").value;

    if(khachHang == 0){
        document.getElementById("soKetNoi").style.visibility = "hidden";
    }else if(khachHang == 1){
        document.getElementById("soKetNoi").style.visibility = "hidden";
    }else if(khachHang == 2){
        document.getElementById("soKetNoi").style.visibility = "visible";
    }
});

function tinhTienCap(){
    var khachHang = document.getElementById("khachHang").value;

    var maKH = document.getElementById("maKH").value;

    var soKenh = +document.getElementById("soKenh").value;

    var pXuLy = 0;
    var pDiVu = 0;
    var kCapCap = 0;

    if(khachHang == 0){
        alert("Vui lòng chọn khách hàng");
    }else if(khachHang == 1){
        pXuLy = 4.5;
        pDiVu = 20.5;
        kCapCap = soKenh * 7.5;
    }else if(khachHang == 2){
        var soKetNoi = +document.getElementById("soKetNoi").value;
        pXuLy = 15;
        pDiVu = 75;
        if(soKetNoi > 10){
            pDiVu += (soKetNoi - 10) * 5;
        }
        kCapCap = soKenh * 50;
    }

    var tienCap = pXuLy + pDiVu + kCapCap;

    document.getElementById("hienKetQua4").innerHTML = "Mã khách hàng: " + maKH + "<br>" + "Tiền cáp: " + tienCap.toLocaleString() + " VNĐ";
}

document.getElementById("btnTinhTienCap").onclick = tinhTienCap;