package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarOff28: ImageVector
  get() {
    if (_starOff28 != null) {
      return _starOff28!!
    }
    _starOff28 = fluentIcon(name = "Filled.StarOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(6.297F, 6.298F)
          lineToRelative(-4.526F, 0.657F)
          curveToRelative(-1.19F, 0.173F, -1.664F, 1.635F, -0.804F, 2.473F)
          lineToRelative(4.355F, 4.245F)
          lineToRelative(-1.028F, 5.992F)
          curveToRelative(-0.203F, 1.185F, 1.04F, 2.088F, 2.104F, 1.53F)
          lineTo(14.0F, 21.644F)
          lineToRelative(5.382F, 2.83F)
          curveToRelative(1.063F, 0.558F, 2.307F, -0.345F, 2.103F, -1.53F)
          lineToRelative(-0.082F, -0.481F)
          lineToRelative(3.316F, 3.317F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(7.566F, 5.444F)
          lineToRelative(9.679F, 9.68F)
          lineToRelative(-0.067F, -0.391F)
          lineToRelative(4.354F, -4.245F)
          curveToRelative(0.86F, -0.838F, 0.385F, -2.3F, -0.804F, -2.473F)
          lineToRelative(-6.017F, -0.874F)
          lineTo(15.3F, 3.908F)
          curveToRelative(-0.532F, -1.077F, -2.069F, -1.077F, -2.6F, 0.0F)
          lineToRelative(-1.854F, 3.756F)
          close()        
      }
    }
    return _starOff28!!
  }

private var _starOff28: ImageVector? = null
