namespace LuhnDotNetBenchmark
{
    public interface ISingleCheckDigitBenchmark
    {
        void ComputeNumberBasedOnString(string number);
        void ComputeCheckDigitBasedOnString(string number);
        void IsValidNumberBasedOnString(string number);
        void IsValidCheckDigitBasedOnString(string number);
        void ComputeNumberBasedOnSpan(string number);
        void ComputeCheckDigitBasedOnSpan(string number);
        void IsValidNumberBasedOnSpan(string number);
        void IsValidCheckDigitBasedOnSpan(string number);
        void ComputeChainBasedOnString(string number);
        void ComputeChainBasedOnSpan(string number);
        void ValidationChainBasedOnString(string number);
        void ValidationChainBasedOnSpan(string number);
    }
}