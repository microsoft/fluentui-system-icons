package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataTreemap24: ImageVector
  get() {
    if (_dataTreemap24 != null) {
      return _dataTreemap24!!
    }
    _dataTreemap24 = fluentIcon(name = "Filled.DataTreemap24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(18.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(10.5F, 21.0F)
          horizontalLineToRelative(7.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(15.5F)
          horizontalLineTo(10.5F)
          verticalLineTo(21.0F)
          close()
          moveTo(21.0F, 14.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(10.5F)
          verticalLineToRelative(11.0F)
          horizontalLineTo(21.0F)
          close()        
      }
    }
    return _dataTreemap24!!
  }

private var _dataTreemap24: ImageVector? = null
