import androidx.compose.ui.window.ComposeUIViewController
import com.microsoft.design.compose.demo.App
import platform.UIKit.UIViewController

fun MainViewController(): UIViewController = ComposeUIViewController { App() }
