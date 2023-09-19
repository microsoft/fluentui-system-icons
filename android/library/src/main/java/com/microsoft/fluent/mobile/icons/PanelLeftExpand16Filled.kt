package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftExpand16: ImageVector
  get() {
    if (_panelLeftExpand16 != null) {
      return _panelLeftExpand16!!
    }
    _panelLeftExpand16 = fluentIcon(name = "Filled.PanelLeftExpand16", 16f) {
      materialPath {
          moveTo(8.5F, 7.5F)
          horizontalLineToRelative(1.791F)
          lineTo(9.645F, 6.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(10.29F, 8.5F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 8.5F, 8.0F, 8.276F, 8.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveTo(2.0F, 4.999F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.002F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(10.0F, -1.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(8.002F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.447F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _panelLeftExpand16!!
  }

private var _panelLeftExpand16: ImageVector? = null
