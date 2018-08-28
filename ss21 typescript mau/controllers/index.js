var dsNhanVien = new DanhSachNhanVien();
var nv = new NhanVien("2", 3, "4");
var s = new Sep("2", 3, "Sep");
s.QuanLyCongvien = "abc";
dsNhanVien.ThemNhanVien(s);
nv = new NhanVienThuong("2", 3, "4");
dsNhanVien.ThemNhanVien(nv);
for (var _i = 0, _a = dsNhanVien.DSNV; _i < _a.length; _i++) {
    var nv_1 = _a[_i];
    console.log(nv_1.TinhLuong());
    if (nv_1.LoaiNhanVien === "Sep") {
        var sep1 = nv_1;
        console.log(sep1.QuanLyCongvien);
    }
}
console.log(dsNhanVien);
