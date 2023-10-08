import { ethers } from 'hardhat';

async function main() {
  // Menggantilah dengan alamat kontrak Library yang telah dideploy sebelumnya
  const libraryAddress = '0x2438fa7aB636Bb3794e0c466413182bD1Ed65A78';

  const Library = await ethers.getContractFactory("Library");
  const library = await Library.attach(libraryAddress);

  // Detail buku yang ingin Anda perbarui
  const ISBN = "118"; // ISBN buku yang ingin diperbarui
  const newTitle = "akucape"; // Judul baru
  const newYear = 2025; // Tahun terbit baru
  const newAuthor = "krisna"; // Pengarang baru

  // Eksekusi fungsi updateBook
  const tx = await library.updateBook(ISBN, newTitle, newYear, newAuthor);
  await tx.wait();

  console.log(`Informasi buku dengan ISBN ${ISBN} telah diperbarui.`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
