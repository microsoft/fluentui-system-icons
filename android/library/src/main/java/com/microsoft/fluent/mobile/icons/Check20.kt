package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Check20: ImageVector
  get() {
    if (_check20 != null) {
      return _check20!!
    }
    _check20 = fluentIcon(name = "Filled.Check20", 20f) {
      materialPath {
          moveTo(15.879F, 5.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 5.0F, 2.0F, 5.895F, 2.0F, 7.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.121F)
          lineToRelative(-4.44F, 4.44F)
          curveToRelative(-0.585F, 0.585F, -1.535F, 0.585F, -2.12F, 0.0F)
          curveToRelative(-0.586F, -0.586F, -0.586F, -1.536F, 0.0F, -2.122F)
          lineTo(15.878F, 5.0F)
          close()
          moveTo(4.0F, 8.5F)
          curveTo(4.0F, 8.224F, 4.224F, 8.0F, 4.5F, 8.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.776F, 8.0F, 7.0F, 8.224F, 7.0F, 8.5F)
          reflectiveCurveTo(6.776F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.224F, 9.0F, 4.0F, 8.776F, 4.0F, 8.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(4.0F, 11.224F, 4.224F, 11.0F, 4.5F, 11.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.276F, 12.0F, 9.0F, 12.0F)
          horizontalLineTo(4.5F)
          curveTo(4.224F, 12.0F, 4.0F, 11.776F, 4.0F, 11.5F)
          close()
          moveToRelative(13.854F, -5.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(5.0F, -5.0F)
          close()        
      }
    }
    return _check20!!
  }

private var _check20: ImageVector? = null
