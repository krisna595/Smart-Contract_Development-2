        import { ethers } from 'hardhat';

        async function main() {
        // Menggantilah dengan alamat kontrak Library yang telah dideploy sebelumnya
        const libraryAddress = '0x45Df3F50e67Ef5690981201F62511ae9597458d2';

        const Library = await ethers.getContractFactory("Library");
        const library = await Library.attach(libraryAddress);

        const ISBN = '118'; // Ganti dengan ISBN buku yang ingin Anda dapatkan

    const book = await library.getBook(ISBN);

    console.log('Book Details:');
    console.log('ISBN:', book[0]);
    console.log('Title:', book[1]);
    console.log('Year:', book[2].toNumber());
    console.log('Author:', book[3]);
    }

    main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);

        });
