package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeftHeader24: ImageVector
  get() {
    if (_panelLeftHeader24 != null) {
      return _panelLeftHeader24!!
    }
    _panelLeftHeader24 = fluentIcon(name = "Regular.PanelLeftHeader24", 24f) {
      materialPath {
          moveTo(5.25F, 4.0F)
          curveTo(3.455F, 4.0F, 2.0F, 5.455F, 2.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(2.0F, 18.545F, 3.455F, 20.0F, 5.25F, 20.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-9.5F)
          curveTo(22.0F, 5.455F, 20.545F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(5.25F)
          close()
          moveToRelative(4.25F, 6.5F)
          horizontalLineToRelative(11.0F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(11.0F, -1.5F)
          horizontalLineToRelative(-11.0F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(9.0F)
          close()
          moveTo(5.25F, 5.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(13.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          close()        
      }
    }
    return _panelLeftHeader24!!
  }

private var _panelLeftHeader24: ImageVector? = null
