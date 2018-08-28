class Sep extends NhanVien {
    public QuanLyCongvien:string;
    constructor(hoTen:string,luong:number,loaiNhanVien:string) {
        super(hoTen,luong,loaiNhanVien)
    }
    public TinhLuong():number
    {
        return this.LuongCB * 3;
    }
}