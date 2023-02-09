//namespace FundApp.Models
//{
//    public class Helper
//    {
//        public static string GetAWSConnectionString()
//        {
//            var appConfig = ConfigurationManager.AppSettings;

//            string dbname = appConfig["fundfriendsdb"];

//            if (string.IsNullOrEmpty(dbname)) return null;

//            string username = appConfig["postgres451r"];
//            string password = appConfig["#qJe8aHh!Fz"];
//            string hostname = appConfig["fundfriendsdb.c3z7pbsxtulb.us-east-2.rds.amazonaws.com"];
//            string port = appConfig["5432"];

//            return "Data Source=" + hostname + ":" + port;
//        }
//    }
//}
