package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSquareUpRight20: ImageVector
  get() {
    if (_arrowSquareUpRight20 != null) {
      return _arrowSquareUpRight20!!
    }
    _arrowSquareUpRight20 = fluentIcon(name = "Filled.ArrowSquareUpRight20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(9.691F, 1.038F)
          curveTo(12.632F, 7.013F, 12.568F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 7.0F, 7.0F, 7.224F, 7.0F, 7.5F)
          reflectiveCurveTo(7.224F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-4.146F, 4.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(12.0F, 8.707F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.068F, -0.014F, -0.132F, -0.038F, -0.191F)
          reflectiveCurveToRelative(-0.06F, -0.113F, -0.106F, -0.16F)
          lineTo(12.85F, 7.144F)
          curveToRelative(-0.047F, -0.047F, -0.102F, -0.082F, -0.16F, -0.106F)
          close()        
      }
    }
    return _arrowSquareUpRight20!!
  }

private var _arrowSquareUpRight20: ImageVector? = null
