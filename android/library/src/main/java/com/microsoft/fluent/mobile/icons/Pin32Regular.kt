package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pin32: ImageVector
  get() {
    if (_pin32 != null) {
      return _pin32!!
    }
    _pin32 = fluentIcon(name = "Regular.Pin32", 32f) {
      materialPath {
          moveTo(22.15F, 3.237F)
          curveToRelative(-1.93F, -1.93F, -5.185F, -1.403F, -6.406F, 1.04F)
          lineToRelative(-3.175F, 6.35F)
          curveToRelative(-0.178F, 0.356F, -0.49F, 0.627F, -0.868F, 0.752F)
          lineTo(6.72F, 13.04F)
          curveToRelative(-1.41F, 0.47F, -1.833F, 2.26F, -0.782F, 3.312F)
          lineToRelative(4.149F, 4.149F)
          lineTo(4.0F, 26.586F)
          verticalLineToRelative(1.415F)
          horizontalLineToRelative(1.414F)
          lineToRelative(6.086F, -6.086F)
          lineToRelative(4.149F, 4.149F)
          curveToRelative(1.051F, 1.05F, 2.841F, 0.628F, 3.311F, -0.782F)
          lineToRelative(1.661F, -4.983F)
          curveToRelative(0.126F, -0.377F, 0.397F, -0.69F, 0.752F, -0.867F)
          lineToRelative(6.351F, -3.175F)
          curveToRelative(2.442F, -1.222F, 2.97F, -4.476F, 1.04F, -6.407F)
          lineTo(22.15F, 3.237F)
          close()
          moveTo(17.533F, 5.17F)
          curveToRelative(0.61F, -1.221F, 2.238F, -1.485F, 3.203F, -0.52F)
          lineToRelative(6.614F, 6.614F)
          curveToRelative(0.965F, 0.965F, 0.7F, 2.592F, -0.52F, 3.203F)
          lineToRelative(-6.351F, 3.175F)
          curveToRelative(-0.83F, 0.415F, -1.462F, 1.143F, -1.755F, 2.024F)
          lineToRelative(-1.661F, 4.982F)
          lineToRelative(-9.712F, -9.711F)
          lineToRelative(4.983F, -1.661F)
          curveToRelative(0.88F, -0.294F, 1.608F, -0.925F, 2.024F, -1.755F)
          lineToRelative(3.175F, -6.351F)
          close()        
      }
    }
    return _pin32!!
  }

private var _pin32: ImageVector? = null
