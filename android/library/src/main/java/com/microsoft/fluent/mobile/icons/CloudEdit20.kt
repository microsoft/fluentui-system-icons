package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudEdit20: ImageVector
  get() {
    if (_cloudEdit20 != null) {
      return _cloudEdit20!!
    }
    _cloudEdit20 = fluentIcon(name = "Filled.CloudEdit20", 20f) {
      materialPath {
          moveTo(14.647F, 8.246F)
          curveTo(14.415F, 5.923F, 12.817F, 4.0F, 10.0F, 4.0F)
          reflectiveCurveTo(5.587F, 5.908F, 5.353F, 8.246F)
          horizontalLineToRelative(-0.07F)
          curveTo(3.468F, 8.246F, 2.0F, 9.758F, 2.0F, 11.623F)
          curveTo(2.0F, 13.488F, 3.47F, 15.0F, 5.282F, 15.0F)
          horizontalLineToRelative(3.193F)
          curveToRelative(0.152F, -0.501F, 0.426F, -0.958F, 0.798F, -1.33F)
          lineToRelative(4.829F, -4.83F)
          curveToRelative(0.252F, -0.252F, 0.54F, -0.447F, 0.847F, -0.586F)
          curveToRelative(-0.076F, -0.005F, -0.153F, -0.008F, -0.231F, -0.008F)
          horizontalLineToRelative(-0.071F)
          close()
          moveToRelative(0.162F, 1.302F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.28F, 0.28F, -0.48F, 0.634F, -0.577F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.651F, 0.428F, 1.241F, 1.079F, 1.078F)
          lineToRelative(1.498F, -0.374F)
          curveToRelative(0.386F, -0.097F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          curveToRelative(-0.73F, -0.73F, -1.915F, -0.73F, -2.645F, 0.0F)
          close()        
      }
    }
    return _cloudEdit20!!
  }

private var _cloudEdit20: ImageVector? = null
