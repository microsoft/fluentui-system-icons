package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUndo48: ImageVector
  get() {
    if (_arrowUndo48 != null) {
      return _arrowUndo48!!
    }
    _arrowUndo48 = fluentIcon(name = "Filled.ArrowUndo48", 48f) {
      materialPath {
          moveTo(6.998F, 5.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          curveToRelative(0.829F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(11.485F)
          lineToRelative(7.901F, -8.062F)
          curveToRelative(5.572F, -6.3F, 14.95F, -6.161F, 19.93F, -0.67F)
          curveToRelative(5.0F, 5.514F, 3.376F, 13.309F, 0.028F, 17.222F)
          lineToRelative(-0.008F, 0.01F)
          lineToRelative(-2.259F, 2.544F)
          lineToRelative(-2.537F, 2.537F)
          lineToRelative(-4.247F, 4.16F)
          lineToRelative(-8.242F, 8.33F)
          lineToRelative(-0.005F, 0.005F)
          lineToRelative(-0.497F, 0.496F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          curveToRelative(-0.587F, -0.586F, -0.587F, -1.536F, 0.0F, -2.122F)
          lineToRelative(0.49F, -0.49F)
          lineToRelative(0.006F, -0.006F)
          lineToRelative(8.252F, -8.34F)
          lineToRelative(4.253F, -4.165F)
          lineToRelative(2.463F, -2.463F)
          lineToRelative(2.18F, -2.456F)
          curveToRelative(2.635F, -3.09F, 3.742F, -9.144F, 0.02F, -13.247F)
          curveToRelative(-3.738F, -4.123F, -11.05F, -4.37F, -15.482F, 0.667F)
          lineToRelative(-0.026F, 0.03F)
          lineTo(12.224F, 19.0F)
          horizontalLineToRelative(11.274F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineToRelative(-15.0F)
          close()        
      }
    }
    return _arrowUndo48!!
  }

private var _arrowUndo48: ImageVector? = null
