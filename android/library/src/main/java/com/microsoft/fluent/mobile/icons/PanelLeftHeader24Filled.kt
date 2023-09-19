package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftHeader24: ImageVector
  get() {
    if (_panelLeftHeader24 != null) {
      return _panelLeftHeader24!!
    }
    _panelLeftHeader24 = fluentIcon(name = "Filled.PanelLeftHeader24", 24f) {
      materialPath {
          moveTo(2.0F, 7.25F)
          curveTo(2.0F, 5.455F, 3.455F, 4.0F, 5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 4.0F, 22.0F, 5.455F, 22.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 20.0F, 2.0F, 18.545F, 2.0F, 16.75F)
          verticalLineToRelative(-9.5F)
          close()
          moveToRelative(18.5F, 0.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(9.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(7.25F)
          close()
          moveToRelative(0.0F, 3.25F)
          horizontalLineToRelative(-11.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(10.5F)
          close()        
      }
    }
    return _panelLeftHeader24!!
  }

private var _panelLeftHeader24: ImageVector? = null
