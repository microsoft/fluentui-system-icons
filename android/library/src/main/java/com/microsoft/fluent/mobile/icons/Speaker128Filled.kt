package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Speaker128: ImageVector
  get() {
    if (_speaker128 != null) {
      return _speaker128!!
    }
    _speaker128 = fluentIcon(name = "Filled.Speaker128", 128f) {
      materialPath {
          moveTo(14.395F, 3.902F)
          curveTo(15.193F, 3.154F, 16.5F, 3.72F, 16.5F, 4.814F)
          verticalLineToRelative(18.37F)
          curveToRelative(0.0F, 1.094F, -1.306F, 1.66F, -2.105F, 0.912F)
          lineTo(9.458F, 19.47F)
          curveToRelative(-0.324F, -0.304F, -0.752F, -0.473F, -1.196F, -0.473F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineToRelative(-3.492F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(3.011F)
          curveToRelative(0.445F, 0.0F, 0.873F, -0.17F, 1.197F, -0.473F)
          lineToRelative(4.937F, -4.63F)
          close()
          moveToRelative(5.958F, 4.4F)
          curveToRelative(-0.249F, -0.33F, -0.719F, -0.398F, -1.05F, -0.15F)
          curveToRelative(-0.332F, 0.25F, -0.399F, 0.72F, -0.15F, 1.05F)
          curveTo(20.156F, 10.54F, 20.75F, 12.2F, 20.75F, 14.0F)
          curveToRelative(0.0F, 1.8F, -0.594F, 3.46F, -1.597F, 4.797F)
          curveToRelative(-0.249F, 0.33F, -0.181F, 0.8F, 0.15F, 1.05F)
          curveToRelative(0.331F, 0.248F, 0.801F, 0.181F, 1.05F, -0.15F)
          curveTo(21.544F, 18.11F, 22.25F, 16.136F, 22.25F, 14.0F)
          curveToRelative(0.0F, -2.137F, -0.706F, -4.11F, -1.897F, -5.697F)
          close()        
      }
    }
    return _speaker128!!
  }

private var _speaker128: ImageVector? = null
