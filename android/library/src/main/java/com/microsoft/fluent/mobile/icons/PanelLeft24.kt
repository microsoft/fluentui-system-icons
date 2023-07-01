package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeft24: ImageVector
  get() {
    if (_panelLeft24 != null) {
      return _panelLeft24!!
    }
    _panelLeft24 = fluentIcon(name = "Regular.PanelLeft24", 24f) {
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
          moveTo(9.5F, 5.5F)
          verticalLineToRelative(13.0F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(9.5F)
          close()
          moveTo(8.0F, 5.5F)
          horizontalLineTo(5.25F)
          curveTo(4.284F, 5.5F, 3.5F, 6.284F, 3.5F, 7.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-13.0F)
          close()        
      }
    }
    return _panelLeft24!!
  }

private var _panelLeft24: ImageVector? = null
