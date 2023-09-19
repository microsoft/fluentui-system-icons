package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarHalf12: ImageVector
  get() {
    if (_starHalf12 != null) {
      return _starHalf12!!
    }
    _starHalf12 = fluentIcon(name = "Regular.StarHalf12", 12f) {
      materialPath {
          moveTo(6.0F, 9.428F)
          lineToRelative(-2.223F, 1.169F)
          curveToRelative(-0.587F, 0.308F, -1.272F, -0.19F, -1.16F, -0.844F)
          lineTo(3.04F, 7.277F)
          lineTo(1.243F, 5.524F)
          curveTo(0.767F, 5.06F, 1.03F, 4.254F, 1.685F, 4.159F)
          lineTo(4.172F, 3.8F)
          lineToRelative(1.112F, -2.253F)
          curveTo(5.43F, 1.249F, 5.715F, 1.1F, 6.0F, 1.1F)
          curveToRelative(0.286F, 0.0F, 0.571F, 0.148F, 0.718F, 0.446F)
          lineTo(7.83F, 3.798F)
          lineToRelative(2.486F, 0.361F)
          curveToRelative(0.656F, 0.096F, 0.918F, 0.902F, 0.443F, 1.365F)
          lineTo(8.96F, 7.277F)
          lineToRelative(0.425F, 2.476F)
          curveToRelative(0.112F, 0.654F, -0.574F, 1.152F, -1.16F, 0.844F)
          lineTo(6.0F, 9.428F)
          close()
          moveToRelative(0.0F, -7.075F)
          verticalLineToRelative(6.049F)
          curveToRelative(0.128F, 0.0F, 0.256F, 0.03F, 0.373F, 0.092F)
          lineToRelative(1.958F, 1.029F)
          lineToRelative(-0.374F, -2.18F)
          curveToRelative(-0.045F, -0.26F, 0.042F, -0.525F, 0.23F, -0.708F)
          lineTo(9.771F, 5.09F)
          lineTo(7.582F, 4.773F)
          curveTo(7.322F, 4.735F, 7.096F, 4.57F, 6.98F, 4.335F)
          lineTo(6.0F, 2.352F)
          verticalLineToRelative(0.001F)
          close()        
      }
    }
    return _starHalf12!!
  }

private var _starHalf12: ImageVector? = null
