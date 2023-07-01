package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrowUp20: ImageVector
  get() {
    if (_locationArrowUp20 != null) {
      return _locationArrowUp20!!
    }
    _locationArrowUp20 = fluentIcon(name = "Filled.LocationArrowUp20", 20f) {
      materialPath {
          moveTo(14.95F, 13.955F)
          curveToRelative(2.733F, -2.735F, 2.733F, -7.169F, 0.0F, -9.904F)
          curveToRelative(-2.734F, -2.735F, -7.166F, -2.735F, -9.9F, 0.0F)
          curveToRelative(-2.733F, 2.735F, -2.733F, 7.17F, 0.0F, 9.904F)
          lineToRelative(1.521F, 1.499F)
          lineToRelative(2.043F, 1.985F)
          lineToRelative(0.133F, 0.118F)
          curveToRelative(0.775F, 0.628F, 1.91F, 0.588F, 2.64F, -0.118F)
          lineToRelative(2.435F, -2.37F)
          lineToRelative(1.128F, -1.114F)
          close()
          moveToRelative(-2.804F, -5.601F)
          lineTo(10.5F, 6.707F)
          verticalLineTo(11.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(6.707F)
          lineTo(7.854F, 8.354F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(2.5F, -2.5F)
          curveTo(9.74F, 5.052F, 9.867F, 5.0F, 10.0F, 5.0F)
          curveToRelative(0.133F, 0.0F, 0.26F, 0.053F, 0.354F, 0.146F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          close()        
      }
    }
    return _locationArrowUp20!!
  }

private var _locationArrowUp20: ImageVector? = null
