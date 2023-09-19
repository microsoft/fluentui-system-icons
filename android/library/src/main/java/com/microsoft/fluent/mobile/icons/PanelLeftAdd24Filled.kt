package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftAdd24: ImageVector
  get() {
    if (_panelLeftAdd24 != null) {
      return _panelLeftAdd24!!
    }
    _panelLeftAdd24 = fluentIcon(name = "Filled.PanelLeftAdd24", 24f) {
      materialPath {
          moveTo(5.25F, 4.0F)
          curveTo(3.455F, 4.0F, 2.0F, 5.455F, 2.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(2.0F, 18.545F, 3.455F, 20.0F, 5.25F, 20.0F)
          horizontalLineToRelative(6.248F)
          curveToRelative(-0.198F, -0.474F, -0.34F, -0.977F, -0.422F, -1.5F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(-13.0F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(4.482F)
          curveToRelative(0.551F, 0.287F, 1.056F, 0.651F, 1.5F, 1.078F)
          verticalLineTo(7.25F)
          curveTo(22.0F, 5.455F, 20.545F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(23.0F, 17.5F)
          curveToRelative(0.0F, -3.038F, -2.462F, -5.5F, -5.5F, -5.5F)
          reflectiveCurveTo(12.0F, 14.462F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          close()
          moveTo(18.0F, 18.0F)
          lineToRelative(0.001F, 2.503F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.223F, -0.5F, -0.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(-2.505F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.277F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.223F, 0.5F, 0.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(2.497F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(18.0F)
          close()        
      }
    }
    return _panelLeftAdd24!!
  }

private var _panelLeftAdd24: ImageVector? = null
