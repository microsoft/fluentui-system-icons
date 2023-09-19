package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataTreemap24: ImageVector
  get() {
    if (_dataTreemap24 != null) {
      return _dataTreemap24!!
    }
    _dataTreemap24 = fluentIcon(name = "Regular.DataTreemap24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(6.25F, 4.5F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-15.0F)
          horizontalLineTo(6.25F)
          close()
          moveToRelative(4.25F, 0.0F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(9.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(10.5F)
          close()
          moveToRelative(9.0F, 11.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(7.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(15.5F)
          close()        
      }
    }
    return _dataTreemap24!!
  }

private var _dataTreemap24: ImageVector? = null
