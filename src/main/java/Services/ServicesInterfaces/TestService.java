package Services.ServicesInterfaces;

import Models.Tests.Test;
import java.util.Optional;

public interface TestService {
    Optional<Test> getTest(int TestID);
    void insertTest(Test test);
}
