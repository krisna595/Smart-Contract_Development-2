    import { ethers } from 'hardhat';

    async function main() {
    // Menggantilah dengan alamat kontrak Library yang telah dideploy sebelumnya
    const libraryAddress = '0x2438fa7aB636Bb3794e0c466413182bD1Ed65A78';

    const Library = await ethers.getContractFactory("Library");
    const library = await Library.attach(libraryAddress);

    // Pengaturan transaksi
    const ISBN = "118";
    const title = "akucape";
    const year = 2024;
    const author = "mautidur";

    // Eksekusi fungsi tambah buku
    const tx = await library.addBook(ISBN, title, year, author);
    await tx.wait();

    console.log("Buku berhasil ditambahkan!");
    }

    main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
