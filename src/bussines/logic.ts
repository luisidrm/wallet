import axios from "axios";
import { useEffect, useState } from "react";
import { accountURL } from "../routes";

function useAccountData(accountId:string) {
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchAccount = async () => {
      try {
        setLoading(true);
        const data = await axios.get(accountURL)
          setAccounts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (accountId) {
      fetchAccount();
    }
  }, [accountId]);

  return { accounts, loading, error };
}