import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
} from "./company";

const baseURL = "https://financialmodelingprep.com/api/v3";
const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  params: {
    apikey: apiKey,
  },
});

interface ResponseData<T> {
  data: T[];
}

const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 429) {
      return "API responded: PRO FEATURE ONLY.";
    } else {
      return error.message;
    }
  } else {
    return "An expected error has occured.";
  }
};

export const searchCompanies = async (query: string) => {
  try {
    const { data } = await axiosInstance.get<ResponseData<CompanySearch>>(
      `/search`,
      {
        params: {
          query,
          limit: 10,
          exchange: "NASDAQ",
        },
      }
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getCompanyProfile = async (ticker: string) => {
  try {
    const { data } = await axiosInstance.get<ResponseData<CompanyProfile>>(
      `/profile`,
      {
        params: {
          ticker,
        },
      }
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getKeyMetrics = async (ticker: string) => {
  try {
    const { data } = await axiosInstance.get<ResponseData<CompanyKeyMetrics>>(
      `/key-metrics-ttm`,
      {
        params: {
          ticker,
          limit: 40,
        },
      }
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getIncomeStatement = async (ticker: string) => {
  try {
    const { data } = await axiosInstance.get<
      ResponseData<CompanyIncomeStatement>
    >(`/income-statement`, {
      params: {
        ticker,
        limit: 50,
      },
    });
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getBalanceSheet = async (ticker: string) => {
  try {
    const { data } = await axiosInstance.get<ResponseData<CompanyBalanceSheet>>(
      `/balance-sheet-statement`,
      {
        params: {
          ticker,
          limit: 50,
        },
      }
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const getCashFlowStatement = async (ticker: string) => {
  try {
    const { data } = await axiosInstance.get<ResponseData<CompanyCashFlow>>(
      `/cash-flow-statement`,
      {
        params: {
          ticker,
          limit: 50,
        },
      }
    );
    return data;
  } catch (error) {
    return handleError(error);
  }
};
