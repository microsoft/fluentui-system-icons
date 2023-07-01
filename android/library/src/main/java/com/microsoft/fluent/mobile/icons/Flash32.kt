package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flash32: ImageVector
  get() {
    if (_flash32 != null) {
      return _flash32!!
    }
    _flash32 = fluentIcon(name = "Regular.Flash32", 32f) {
      materialPath {
          moveTo(10.103F, 3.368F)
          curveTo(10.375F, 2.55F, 11.139F, 2.0F, 12.0F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.656F, 0.0F, 1.27F, 0.322F, 1.644F, 0.86F)
          curveToRelative(0.373F, 0.54F, 0.459F, 1.228F, 0.229F, 1.842F)
          lineTo(20.886F, 10.0F)
          horizontalLineTo(24.0F)
          curveToRelative(0.775F, 0.0F, 1.48F, 0.448F, 1.81F, 1.15F)
          curveToRelative(0.33F, 0.7F, 0.225F, 1.53F, -0.27F, 2.126F)
          lineTo(12.473F, 29.047F)
          curveToRelative(-1.706F, 2.058F, -5.016F, 0.365F, -4.346F, -2.222F)
          lineTo(10.415F, 18.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.643F, 0.0F, -1.247F, -0.309F, -1.622F, -0.83F)
          curveToRelative(-0.376F, -0.522F, -0.479F, -1.193F, -0.275F, -1.803F)
          lineToRelative(4.0F, -12.0F)
          close()
          moveTo(12.0F, 4.0F)
          lineTo(8.0F, 16.0F)
          horizontalLineToRelative(3.708F)
          curveToRelative(0.654F, 0.0F, 1.132F, 0.618F, 0.968F, 1.251F)
          lineToRelative(-2.613F, 10.076F)
          curveToRelative(-0.134F, 0.517F, 0.528F, 0.856F, 0.87F, 0.444F)
          lineTo(24.0F, 12.0F)
          horizontalLineToRelative(-4.557F)
          curveToRelative(-0.698F, 0.0F, -1.181F, -0.697F, -0.936F, -1.351F)
          lineTo(21.0F, 4.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _flash32!!
  }

private var _flash32: ImageVector? = null
