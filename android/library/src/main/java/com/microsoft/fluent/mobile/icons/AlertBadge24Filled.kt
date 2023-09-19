package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertBadge24: ImageVector
  get() {
    if (_alertBadge24 != null) {
      return _alertBadge24!!
    }
    _alertBadge24 = fluentIcon(name = "Filled.AlertBadge24", 24f) {
      materialPath {
          moveTo(18.5F, 9.0F)
          curveToRelative(0.338F, 0.0F, 0.664F, -0.048F, 0.973F, -0.137F)
          curveToRelative(0.018F, 0.211F, 0.027F, 0.425F, 0.027F, 0.64F)
          verticalLineToRelative(4.0F)
          lineToRelative(1.418F, 3.16F)
          curveToRelative(0.055F, 0.122F, 0.084F, 0.254F, 0.084F, 0.389F)
          curveToRelative(0.0F, 0.524F, -0.426F, 0.95F, -0.95F, 0.95F)
          horizontalLineToRelative(-16.1F)
          curveToRelative(-0.134F, 0.0F, -0.266F, -0.029F, -0.388F, -0.083F)
          curveToRelative(-0.479F, -0.215F, -0.693F, -0.777F, -0.479F, -1.256F)
          lineToRelative(1.415F, -3.16F)
          verticalLineTo(9.49F)
          lineToRelative(0.005F, -0.25F)
          curveTo(4.644F, 5.211F, 7.955F, 2.004F, 12.0F, 2.004F)
          curveToRelative(1.443F, 0.0F, 2.791F, 0.408F, 3.935F, 1.114F)
          curveTo(15.355F, 3.743F, 15.0F, 4.58F, 15.0F, 5.5F)
          curveTo(15.0F, 7.433F, 16.567F, 9.0F, 18.5F, 9.0F)
          close()
          moveToRelative(-3.542F, 10.003F)
          curveToRelative(-0.238F, 1.418F, -1.472F, 2.498F, -2.958F, 2.498F)
          curveToRelative(-1.486F, 0.0F, -2.72F, -1.08F, -2.958F, -2.498F)
          horizontalLineToRelative(5.916F)
          close()
          moveTo(18.5F, 8.0F)
          curveTo(19.88F, 8.0F, 21.0F, 6.88F, 21.0F, 5.5F)
          reflectiveCurveTo(19.88F, 3.0F, 18.5F, 3.0F)
          reflectiveCurveTo(16.0F, 4.12F, 16.0F, 5.5F)
          reflectiveCurveTo(17.12F, 8.0F, 18.5F, 8.0F)
          close()        
      }
    }
    return _alertBadge24!!
  }

private var _alertBadge24: ImageVector? = null
