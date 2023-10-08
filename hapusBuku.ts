    import { ethers } from 'hardhat';

    async function main() {
    // Menggantilah dengan alamat kontrak Library yang telah dideploy sebelumnya
    const libraryAddress = '0x2438fa7aB636Bb3794e0c466413182bD1Ed65A78';

    const Library = await ethers.getContractFactory("Library");
    const library = await Library.attach(libraryAddress);

    // ISBN buku yang ingin Anda hapus
    const ISBN = "118";

    // Eksekusi fungsi removeBook
    const tx = await library.removeBook(ISBN);
    await tx.wait();

    console.log(`Buku dengan ISBN ${ISBN} telah dihapus dari perpustakaan.`);
    }

    main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
