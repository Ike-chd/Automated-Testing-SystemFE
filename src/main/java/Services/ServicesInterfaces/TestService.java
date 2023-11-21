package Services.ServicesInterfaces;

import Models.Tests.Test;

public interface TestService {
    public Test getTest(int TestID);
    public void insertTest(Test test);
}
