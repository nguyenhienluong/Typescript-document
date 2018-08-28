let dsNhanVien = new DanhSachNhanVien();
let nv = new NhanVien("2",3,"4");

let s:Sep = new Sep("2",3,"Sep");
s.QuanLyCongvien = "abc";
dsNhanVien.ThemNhanVien(s);
nv = new NhanVienThuong("2", 3, "4");
dsNhanVien.ThemNhanVien(nv);

for(let nv of dsNhanVien.DSNV)
{
    console.log(nv.TinhLuong());
    if(nv.LoaiNhanVien === "Sep")
    {
        let sep1:Sep = (<Sep>nv);
        console.log(sep1.QuanLyCongvien);
    }
 
}
console.log(dsNhanVien);
