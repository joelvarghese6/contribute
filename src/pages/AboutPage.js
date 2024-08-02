import axios from "axios";
import { useEffect, useState } from "react";
import data from "../dummy/data.json";
import CrowdfundingDetails from "../components/AboutDetails";
import MainHeader from "../components/main-header";
import { useOkto } from "okto-sdk-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AboutPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(data.defaultAmounts[1]);
  const [loading, setLoading] = useState(false);
  const [networkName, setNetworkName] = useState("SOLANA_DEVNET");
  const [tokenAddress, setTokenAddress] = useState(
    "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
  );
  const [recipientAddress, setRecipientAddress] = useState(
    "2tBUHRfWHVPAkFcm4KdoqngVrudvBSmC7PSCorCUofU2"
  );
  const defaultAmounts = data.defaultAmounts;

  const {
    transferTokens,
    getPortfolio,
    getWallets,
    getSupportedNetworks,
    getSupportedTokens,
    orderHistory,
  } = useOkto();

  useEffect(() => {
    if (!localStorage.getItem("sessionToken")) {
      navigate("/");
    }
  }, []);

  const createCheckOutSession = async () => {
    transferTokens({
      network_name: networkName,
      token_address: tokenAddress,
      recipient_address: recipientAddress,
      quantity: String(amount),
    })
      .then((result) => {
        console.log("Transfer success", result);
        toast.success("Transfer Success")
      })
      .catch((error) => {
        console.log("Transfer error", error);
        toast.error("Something happened")
      });
  };

  return (
    <div className="relative flex flex-col-reverse items-center w-screen p-10 sm:flex-row sm:p-20 sm:justify-evenly min-h-screen">
      <div className="mt-20 mb-12 sm:-mb-12 sm:mt-0">
        <CrowdfundingDetails
          image="/demo2.jpeg"
          title="Metaverse Craft"
          description="In Metaverse Craft, players can explore an infinite, procedurally generated world filled with diverse biomes, creatures, and resources. The game offers both survival and creative modes, allowing players to either fend for themselves in a hostile environment or build to their heart's content without limitations."
          twitter="https://twitter.com/yourprofile"
          telegram="https://t.me/yourprofile"
          avatar="/avatarr.avif"
        />
      </div>
      <div className="flex flex-col items-center w-screen sm:items-start sm:w-auto sm:h-auto bg-[#FFF9A5]">
        <div className="sm:w-[436px] w-[90vw] z-50 mt-10 flex flex-col space-y-5 shadow-xl rounded-md items-center px-5 sm:px-10 p-10 bg-white/10">
          <h2 className="text-3xl font-semibold font-ClashDisplay text-accent">
            Love what I do? Feel free to support me with a Contribution!
          </h2>
          <p className="text-black">
            Thanks in advance. Each contribution of yours means a lot, however
            little it might be!
          </p>
          <div className="bg-[#E9F9FA]/30 group flex items-center focus:outline-none text-white rounded-lg w-full">
            <p className="uppercase text-lg text-black rounded-l-lg px-4 py-3 group-hover:opacity-60">
              {data.currency}
            </p>
            <input
              type="number"
              value={amount ? amount : ""}
              className="w-full px-4 py-3 text-black bg-transparent rounded-lg focus:outline-none group-hover:opacity-60"
              placeholder="Enter Amount"
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <div className="flex items-center w-full space-x-2">
            {defaultAmounts.map((buttonAmount) => (
              <button
                className={`${
                  amount === buttonAmount ? "bg-[#B48B7D]" : "bg-[#E7EAEA]/70"
                }  px-6 py-3 rounded-full hover:opacity-60`}
                onClick={() => setAmount(buttonAmount)}
                key={buttonAmount}
              >
                ${buttonAmount}
              </button>
            ))}
          </div>
          <button
            disabled={!amount || loading}
            onClick={createCheckOutSession}
            role="link"
            className={`bg-[#B48B7D] text-xl mt-4 font-semibold flex justify-center hover:opacity-60 items-center w-full px-6 py-3 rounded-lg bg-white ${
              amount ? "" : "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <div
                style={{ borderTopColor: "transparent" }}
                className="inline-block w-6 h-6 border-4 border-solid rounded-full border-darkerBlue animate-spin"
                role="status"
              />
            ) : (
              <span>Contribute</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
