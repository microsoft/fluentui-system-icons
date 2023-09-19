package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftExpand24: ImageVector
  get() {
    if (_panelLeftExpand24 != null) {
      return _panelLeftExpand24!!
    }
    _panelLeftExpand24 = fluentIcon(name = "Filled.PanelLeftExpand24", 24f) {
      materialPath {
          moveTo(14.193F, 14.751F)
          curveToRelative(0.277F, 0.308F, 0.75F, 0.333F, 1.059F, 0.056F)
          lineToRelative(2.5F, -2.25F)
          curveTo(17.91F, 12.415F, 18.0F, 12.213F, 18.0F, 12.0F)
          curveToRelative(0.0F, -0.213F, -0.09F, -0.415F, -0.248F, -0.557F)
          lineToRelative(-2.5F, -2.25F)
          curveToRelative(-0.308F, -0.277F, -0.782F, -0.252F, -1.06F, 0.056F)
          curveToRelative(-0.277F, 0.308F, -0.252F, 0.782F, 0.056F, 1.059F)
          lineToRelative(1.048F, 0.942F)
          horizontalLineTo(11.75F)
          curveTo(11.336F, 11.25F, 11.0F, 11.586F, 11.0F, 12.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.546F)
          lineToRelative(-1.048F, 0.942F)
          curveToRelative(-0.308F, 0.277F, -0.333F, 0.751F, -0.055F, 1.06F)
          close()
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(14.5F)
          curveTo(20.769F, 4.0F, 22.0F, 5.231F, 22.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 20.0F, 2.0F, 18.769F, 2.0F, 17.25F)
          verticalLineTo(6.75F)
          close()
          moveTo(9.0F, 5.5F)
          verticalLineToRelative(13.0F)
          horizontalLineToRelative(10.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _panelLeftExpand24!!
  }

private var _panelLeftExpand24: ImageVector? = null
