import {NhanVien} from './NhanVien'

export class DanhSachNhanVien {
    public DSNV: Array<NhanVien>
    constructor () {
        this.DSNV = [];
    }
    public ThemNhanVien(nhanVien: NhanVien) {
        this.DSNV.push(nhanVien);
    }
}