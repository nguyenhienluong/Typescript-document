class DanhSachNhanVien{
    public DSNV: Array<NhanVien> = [];
    constructor()
    {
        
    }
    public ThemNhanVien(nhanVien:NhanVien):void{
        this.DSNV.push(nhanVien);
    }
}