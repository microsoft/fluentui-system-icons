package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Box16: ImageVector
  get() {
    if (_box16 != null) {
      return _box16!!
    }
    _box16 = fluentIcon(name = "Filled.Box16", 16f) {
      materialPath {
          moveTo(4.036F, 2.488F)
          lineToRelative(6.611F, 2.833F)
          lineTo(8.0F, 6.454F)
          lineTo(1.427F, 3.638F)
          curveTo(1.575F, 3.487F, 1.756F, 3.365F, 1.96F, 3.286F)
          lineToRelative(2.075F, -0.798F)
          close()
          moveToRelative(1.338F, -0.514F)
          lineToRelative(1.55F, -0.596F)
          curveToRelative(0.692F, -0.267F, 1.46F, -0.267F, 2.153F, 0.0F)
          lineToRelative(4.962F, 1.908F)
          curveToRelative(0.205F, 0.08F, 0.386F, 0.2F, 0.534F, 0.352F)
          lineToRelative(-2.656F, 1.139F)
          lineToRelative(-6.543F, -2.803F)
          close()
          moveToRelative(9.62F, 2.572F)
          lineTo(8.5F, 7.329F)
          verticalLineToRelative(7.45F)
          curveToRelative(0.196F, -0.033F, 0.39F, -0.086F, 0.577F, -0.158F)
          lineToRelative(4.962F, -1.909F)
          curveTo(14.618F, 12.49F, 15.0F, 11.933F, 15.0F, 11.312F)
          verticalLineTo(4.686F)
          curveToRelative(0.0F, -0.047F, -0.002F, -0.094F, -0.007F, -0.14F)
          close()
          moveTo(7.5F, 14.779F)
          verticalLineToRelative(-7.45F)
          lineTo(1.006F, 4.546F)
          curveTo(1.002F, 4.592F, 1.0F, 4.639F, 1.0F, 4.686F)
          verticalLineToRelative(6.626F)
          curveToRelative(0.0F, 0.621F, 0.382F, 1.178F, 0.962F, 1.4F)
          lineToRelative(4.961F, 1.909F)
          curveToRelative(0.188F, 0.072F, 0.381F, 0.125F, 0.577F, 0.158F)
          close()        
      }
    }
    return _box16!!
  }

private var _box16: ImageVector? = null
