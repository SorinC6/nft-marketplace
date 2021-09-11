import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { Typography } from '@material-ui/core';

import { nftaddress, nftmarketaddress } from '../config';

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

export default function Home() {
  const [nft, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');

  useEffect(() => {
    loadNFT();
  }, []);

  async function loadNFT() {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
  }

  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="Nft marketplace" content="Basic nft marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography>HOME Content</Typography>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
