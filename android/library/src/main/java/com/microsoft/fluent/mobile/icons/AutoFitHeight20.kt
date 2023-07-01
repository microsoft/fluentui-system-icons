package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AutoFitHeight20: ImageVector
  get() {
    if (_autoFitHeight20 != null) {
      return _autoFitHeight20!!
    }
    _autoFitHeight20 = fluentIcon(name = "Regular.AutoFitHeight20", 20f) {
      materialPath {
          moveTo(4.0F, 2.0F)
          curveTo(3.724F, 2.0F, 3.5F, 2.224F, 3.5F, 2.5F)
          reflectiveCurveTo(3.724F, 3.0F, 4.0F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.276F, 2.0F, 15.0F, 2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.0F, 15.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(3.724F, 18.0F, 4.0F, 18.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.276F, 17.0F, 15.0F, 17.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(9.146F, 5.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineTo(10.0F, 6.707F)
          verticalLineToRelative(6.586F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(9.0F, 13.293F)
          verticalLineTo(6.707F)
          lineTo(7.854F, 7.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.0F, -2.0F)
          close()        
      }
    }
    return _autoFitHeight20!!
  }

private var _autoFitHeight20: ImageVector? = null
